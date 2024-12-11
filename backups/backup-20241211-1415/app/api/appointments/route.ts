import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Appointment from '@/models/Appointment'

export async function GET() {
  try {
    await connectDB()
    const appointments = await Appointment.find({})
      .populate('patientId', 'name')
      .sort({ date: 1, startTime: 1 })
      .lean() // Convert mongoose documents to plain JavaScript objects
    
    return NextResponse.json({
      success: true,
      data: appointments
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch appointments',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    await connectDB()
    const data = await request.json()
    
    const appointment = await Appointment.create({
      patientId: data.patientId,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      type: data.type,
      status: data.status
    })
    
    return NextResponse.json({
      success: true,
      data: appointment.toJSON() // Convert to plain JavaScript object
    }, {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create appointment',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
} 