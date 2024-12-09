import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/mongodb';
import Patient from '../../../models/Patient';

export async function GET() {
  try {
    await connectDB();
    const patients = await Patient.find()
      .sort({ createdAt: -1 })
      .select('name email phone dateOfBirth');
    
    return NextResponse.json({ 
      success: true, 
      data: patients 
    });
  } catch (error) {
    console.error('Error in GET /api/patients:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch patients'
      }, 
      { status: 500 }
    );
  }
} 