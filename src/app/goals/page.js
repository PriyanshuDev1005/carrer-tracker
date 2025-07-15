"use client"
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'

export default function CareerGoalsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'GoalsPageVisited');
    }
  }, []);
  const [date, setDate] = useState(new Date())

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Career Goals</h1>
      <Card>
        <CardContent className="p-4 space-y-4">
          <Input placeholder="Enter your career goal..." />
          <Calendar mode="single" selected={date} onSelect={setDate} />
          <Button>Add Goal</Button>
        </CardContent>
      </Card>
    </div>
  )
}
