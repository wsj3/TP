import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(req: Request) {
  try {
    await connectDB()
    
    const body = await req.json()
    const user = await User.create(body)
    
    return NextResponse.json(user, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to create user' },
      { status: 400 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()
    
    const users = await User.find({}).select('-password')
    
    return NextResponse.json(users)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to fetch users' },
      { status: 500 }
    )
  }
} 