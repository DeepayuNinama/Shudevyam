function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents || "{}");
    var token = body.token;
    var expected = PropertiesService.getScriptProperties().getProperty("APPS_SCRIPT_TOKEN");

    if (!expected || token !== expected) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Unauthorized." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheetId = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
    if (!sheetId) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: "Missing SHEET_ID." }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];
    var row = [
      body.timestamp || new Date().toISOString(),
      body.name || "",
      body.email || "",
      body.phone || "",
      body.interest || "",
      body.message || "",
    ];
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err && err.message ? err.message : "Error." })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
