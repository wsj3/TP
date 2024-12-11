import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  role: {
    type: String,
    enum: ['therapist', 'admin'],
    default: 'therapist'
  },
  settings: {
    aiModel: {
      type: String,
      default: 'gpt-4'
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.User || mongoose.model('User', userSchema) 