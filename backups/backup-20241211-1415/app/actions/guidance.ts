'use server'

import { getGuidanceSheets } from '../utils/googleSheets'

export async function loadGuidance() {
  try {
    const sheets = await getGuidanceSheets()
    return { success: true, data: sheets }
  } catch (error) {
    console.error('Error loading guidance:', error)
    return { success: false, error: 'Failed to load guidance' }
  }
} 