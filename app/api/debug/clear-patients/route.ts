import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST() {
  try {
    const client = await clientPromise
    const db = client.db("therapistsfriend")
    
    await db.collection('patients').deleteMany({})
    
    return NextResponse.json({
      success: true,
      message: 'All patients deleted'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to clear patients' },
      { status: 500 }
    )
  }
} 