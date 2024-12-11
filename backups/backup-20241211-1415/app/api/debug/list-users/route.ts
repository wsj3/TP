import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("therapistfriend")
    
    const users = await db.collection('users').find({}).toArray()
    
    return NextResponse.json({
      success: true,
      users: users,
      count: users.length,
      databaseName: "therapistfriend",
      collectionName: "users"
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to list users' },
      { status: 500 }
    )
  }
} 