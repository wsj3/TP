import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please provide a date of birth'],
  }
}, {
  timestamps: true
});

export default mongoose.models.Patient || mongoose.model('Patient', PatientSchema); 