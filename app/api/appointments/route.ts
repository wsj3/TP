import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([]);  // Return empty array for now
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);  // Debug log
    
    // For now, just echo back the received data
    return NextResponse.json({
      success: true,
      appointment: data
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 400 }
    );
  }
} 