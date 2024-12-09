import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['text', 'email', 'phone', 'other']
  },
  recipient: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'sent',
    enum: ['sent', 'delivered', 'read', 'archived']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema)

export default Message 