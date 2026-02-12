# Apps Script Setup

1. Create a Google Sheet with headers:
   `timestamp | name | email | phone | interest | message`
2. Open **Extensions → Apps Script** and paste `Code.gs`.
3. In **Project Settings → Script Properties**, add:
   - `APPS_SCRIPT_TOKEN` (same as your backend env)
   - `SHEET_ID` (from the Google Sheet URL)
4. Deploy **Deploy → New deployment → Web app**:
   - Execute as: Me
   - Who has access: Anyone
5. Copy the Web App URL into `APPS_SCRIPT_URL`.
