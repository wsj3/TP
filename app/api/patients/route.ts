import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Patient from '@/models/Patient'

export async function GET() {
  try {
    await connectDB()
    const patients = await Patient.find({}).select('name _id')
    
    return NextResponse.json({
      success: true,
      data: patients
    })
  } catch (error) {
    console.error('Error fetching patients:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch patients' },
      { status: 500 }
    )
  }
} 