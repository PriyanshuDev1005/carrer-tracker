import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  date: { type: String, required: true },
  tasks: [{ type: String }],
}, { timestamps: true })

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)
