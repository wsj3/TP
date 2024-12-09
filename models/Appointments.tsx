import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',  // References your existing Patient model
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
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Add a pre-save middleware to update the updatedAt field
AppointmentSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);

export default Appointment;