import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Message from '@/models/Message'

export async function POST(request: Request) {
  try {
    await connectDB()
    const data = await request.json()

    const message = await Message.create({
      type: data.type,
      recipient: data.recipient,
      subject: data.subject,
      content: data.content
    })

    return NextResponse.json({
      success: true,
      data: message
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating message:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create message',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    const messages = await Message.find({})
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({
      success: true,
      data: messages
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch messages',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
} 