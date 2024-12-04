import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export async function GET() {
  try {
    // Log the URI (remove this in production)
    console.log('Attempting to connect with URI:', process.env.MONGODB_URI)

    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined')
    }

    // Test the connection
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    
    // If successful, disconnect
    await mongoose.disconnect()

    return NextResponse.json({
      success: true,
      message: 'MongoDB connection successful',
      host: conn.connection.host
    })

  } catch (error: any) {
    console.error('MongoDB Test Error:', error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
} 