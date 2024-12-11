import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Bill from '@/models/Bill';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const bill = await Bill.create({
      patientId: data.patientId,
      amount: data.amount,
      description: data.description,
      status: 'pending',
      dueDate: data.dueDate,
      services: data.services
    });
    
    return NextResponse.json({ success: true, data: bill });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create bill' },
      { status: 500 }
    );
  }
} 