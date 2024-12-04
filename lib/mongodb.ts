import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return

    const conn = await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected:', conn.connection.host)
    return conn
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
} 