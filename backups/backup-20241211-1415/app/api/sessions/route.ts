import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Session from '@/models/Session';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const session = await Session.create({
      patientId: data.patientId,
      date: data.date,
      notes: data.notes,
      diagnosis: data.diagnosis,
      treatment: data.treatment,
      followUp: data.followUp
    });
    
    return NextResponse.json({ success: true, data: session });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create session' },
      { status: 500 }
    );
  }
} 