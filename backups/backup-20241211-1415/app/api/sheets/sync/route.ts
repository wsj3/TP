import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST() {
  try {
    console.log('Starting Google Sheets sync...')
    
    // Log environment variables presence (not the values for security)
    console.log('Environment check:', {
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID
    })

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    console.log('Auth initialized')

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error('Spreadsheet ID not configured')
    }

    console.log('Attempting to access spreadsheet...')

    // First verify we can access the sheet
    try {
      const metadata = await sheets.spreadsheets.get({
        spreadsheetId,
      })
      console.log('Successfully accessed spreadsheet:', metadata.data.properties?.title)
    } catch (error) {
      console.error('Failed to access spreadsheet:', error)
      throw new Error('Failed to access spreadsheet. Please check permissions.')
    }

    // Get the data
    const ranges = [
      'Business Rules',
      'Structured Guidance',
      'Best Practices',
      'Medical Databases'
    ]

    console.log('Fetching data from sheets:', ranges)

    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges: ranges.map(range => `${range}!A2:Z`),
    })

    console.log('Data received:', {
      hasData: !!response.data.valueRanges,
      sheetCount: response.data.valueRanges?.length
    })

    const processedData = {
      businessRules: response.data.valueRanges?.[0]?.values || [],
      structuredGuidance: response.data.valueRanges?.[1]?.values || [],
      bestPractices: response.data.valueRanges?.[2]?.values || [],
      medicalDatabases: response.data.valueRanges?.[3]?.values || [],
      timestamp: new Date().toISOString()
    }

    console.log('Successfully processed sheet data')
    
    return NextResponse.json(processedData)

  } catch (error) {
    console.error('Sheets sync error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to sync with Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
} 