'use client';

import { Card, CardContent } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Week 1', tasks: 4 },
  { name: 'Week 2', tasks: 6 },
  { name: 'Week 3', tasks: 3 },
  { name: 'Week 4', tasks: 5 },
];

export default function ProgressChartsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Progress Charts</h1>
      <Card>
        <CardContent className="p-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
