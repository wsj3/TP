import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST() {
  try {
    const client = await clientPromise
    const db = client.db("therapistfriend")
    
    await db.collection('users').deleteMany({})
    
    return NextResponse.json({
      success: true,
      message: 'All users deleted'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to clear users' },
      { status: 500 }
    )
  }
} 