import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  }
}, {
  timestamps: true
});

const Patient = mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
export default Patient; 