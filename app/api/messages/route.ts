import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Message from '@/models/Message';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const message = await Message.create({
      from: data.from,
      to: data.to,
      subject: data.subject,
      content: data.content,
      status: 'unread',
      timestamp: new Date()
    });
    
    return NextResponse.json({ success: true, data: message });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 