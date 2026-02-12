import nodemailer from "nodemailer";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "MAIL_TO",
  "MAIL_FROM",
  "APPS_SCRIPT_URL",
  "APPS_SCRIPT_TOKEN",
];

const missingEnv = requiredEnv.filter((key) => !process.env[key]);

const transporter = !missingEnv.length
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(res, status, payload) {
  res.status(status).json(payload);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return jsonResponse(res, 405, { ok: false, error: "Method not allowed." });
  }

  if (missingEnv.length) {
    return jsonResponse(res, 500, {
      ok: false,
      error: `Server misconfigured. Missing: ${missingEnv.join(", ")}`,
    });
  }

  const { name, email, phone, interest, message } = req.body || {};

  if (!name || !email || !phone || !message || !interest) {
    return jsonResponse(res, 400, { ok: false, error: "Missing required fields." });
  }

  if (!emailPattern.test(email)) {
    return jsonResponse(res, 400, { ok: false, error: "Invalid email address." });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New Contact: ${interest}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interest: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    const sheetResponse = await fetch(process.env.APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: process.env.APPS_SCRIPT_TOKEN,
        name,
        email,
        phone,
        interest,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    const sheetData = await sheetResponse.json().catch(() => ({}));
    if (!sheetResponse.ok || !sheetData?.ok) {
      throw new Error(sheetData?.error || "Failed to write to sheet.");
    }

    return jsonResponse(res, 200, { ok: true });
  } catch (error) {
    return jsonResponse(res, 500, {
      ok: false,
      error: error?.message || "Server error.",
    });
  }
}
