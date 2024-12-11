import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
})

const sheets = google.sheets({ version: 'v4', auth })

export async function getGuidanceSheets() {
  try {
    // First, get all sheet names
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    })

    const sheetData = []

    // For each sheet, get its data
    for (const sheet of spreadsheet.data.sheets || []) {
      const sheetName = sheet.properties?.title
      if (sheetName) {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: `${sheetName}!A1:Z100`, // Adjust range as needed
        })

        sheetData.push({
          name: sheetName,
          data: response.data.values || []
        })
      }
    }

    return sheetData
  } catch (error) {
    console.error('Error fetching sheets:', error)
    throw error
  }
} 