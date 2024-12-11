import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST() {
  try {
    const client = await clientPromise
    const db = client.db("therapistsfriend")
    
    await Promise.all([
      db.collection('users').deleteMany({}),
      db.collection('patients').deleteMany({})
    ])
    
    return NextResponse.json({
      success: true,
      message: 'All users and patients deleted'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to clear database' },
      { status: 500 }
    )
  }
} 