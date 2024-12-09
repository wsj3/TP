import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Ensure DB connection is established
    const db = await connectDB();
    console.log('MongoDB connected');

    // Get all appointments without any filters or population
    const appointments = await Appointment.find({}).exec();
    console.log('Found appointments:', appointments);

    // Return basic response
    return NextResponse.json({
      success: true,
      count: appointments.length,
      appointments
    });

  } catch (error) {
    console.error('Debug route error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to get debug info',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 