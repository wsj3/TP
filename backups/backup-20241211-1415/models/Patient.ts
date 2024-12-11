import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Add other patient fields as needed
}, {
  timestamps: true
})

const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema)

export default Patient 