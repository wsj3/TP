import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['initial', 'followup', 'emergency'],
    default: 'followup'
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  }
}, {
  timestamps: true
})

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema)

export default Appointment 