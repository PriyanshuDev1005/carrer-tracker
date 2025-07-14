'use client'

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function DailyTasksPage() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [todayTasks, setTodayTasks] = useState([])
    const [allTasks, setAllTasks] = useState([])
    const [loading, setLoading] = useState(true)

    const today = new Date().toISOString().slice(0, 10)

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('/api/tasks')
        const data = await res.json()
        setAllTasks(data)

        const todayEntry = data.find((t) => t.date === today)
        if (todayEntry) setTodayTasks(todayEntry.tasks)
        setLoading(false)
    }

    const addTodayTask = () => {
        if (newTask.trim() === '') return
        setTodayTasks([...todayTasks, newTask])
        setNewTask('')
    }

    const saveTasks = async () => {
        await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ date: today, tasks: todayTasks })
        })
        fetchTasks()
        alert('Tasks Saved!')
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold mb-4">Daily Tasks</h1>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="flex space-x-2">
                        <Input
                            placeholder="Enter a task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <Button onClick={addTodayTask}>
                            <Plus size={20} />
                        </Button>
                    </div>

                    <div className="space-y-2">
                        {todayTasks.map((task, idx) => (
                            <Input
                                key={idx}
                                value={task}
                                onChange={(e) => {
                                    const updated = [...todayTasks]
                                    updated[idx] = e.target.value
                                    setTodayTasks(updated)
                                }}
                            />
                        ))}
                    </div>

                    <Button onClick={saveTasks}>Save Today’s Tasks</Button>
                </CardContent>
            </Card>

            <h2 className="text-xl font-semibold mt-8">Last 7 Days</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                allTasks.map((day, idx) => (
                    <Card key={idx} className="mb-4">
                        <CardContent className="p-4">
                            <h3 className="font-bold mb-2">{day.date}</h3>
                            <ul className="list-disc list-inside">
                                {day.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    )
}
