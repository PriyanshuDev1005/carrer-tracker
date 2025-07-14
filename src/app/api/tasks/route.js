import { connectMongo } from '@/lib/mongodb'
import Task from '@/models/task'

export async function GET() {
  await connectMongo()

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6)
  const fromDate = sevenDaysAgo.toISOString().slice(0, 10)

  const tasks = await Task.find({ date: { $gte: fromDate } }).sort({ date: -1 })

  return Response.json(tasks)
}

export async function POST(request) {
  const { date, tasks } = await request.json()
  await connectMongo()

  let existing = await Task.findOne({ date })

  if (existing) {
    existing.tasks = tasks
    await existing.save()
    return Response.json({ message: 'Tasks Updated' })
  } else {
    await Task.create({ date, tasks })
    return Response.json({ message: 'Tasks Added' })
  }
}
