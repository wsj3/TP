import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Patient from '@/models/Patient';

export async function GET() {
  try {
    await connectDB();
    const patients = await Patient.find({}).sort({ name: 1 });
    return NextResponse.json(patients);
  } catch (error) {
    console.error('Failed to fetch patients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const patient = await Patient.create(data);
    return NextResponse.json(patient);
  } catch (error) {
    console.error('Failed to create patient:', error);
    return NextResponse.json(
      { error: 'Failed to create patient' },
      { status: 500 }
    );
  }
} 