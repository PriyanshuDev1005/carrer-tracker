import { Card, CardContent } from '@/components/ui/card'

export default function WorkLogPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Work Log</h1>
      <Card>
        <CardContent className="p-4">
          <p>Here you will log your daily work sessions.</p>
        </CardContent>
      </Card>
    </div>
  )
}
