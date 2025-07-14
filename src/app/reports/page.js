import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <Card>
        <CardContent className="p-4 space-y-4">
          <p>Download your weekly or monthly reports here.</p>
          <Button>Download PDF</Button>
          <Button variant="outline">Download CSV</Button>
        </CardContent>
      </Card>
    </div>
  )
}
