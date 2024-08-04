import mongoose from 'mongoose';

const JobSchema = mongoose.Schema({
  id: String,
  title: String,
  type: String,
  description: String,
  location: String,
  salary: String,
  company: {
    name: String,
    description: String,
    contactEmail: String,
    contactPhone: String,
  },
  uuid: {
    type: String,
    // required: true
  }
});

const Job = mongoose.model('Job', JobSchema);
export default Job;