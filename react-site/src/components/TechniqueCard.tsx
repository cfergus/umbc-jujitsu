import { Card, CardContent } from '@mui/material'
import { Technique } from '../techniques'

export function TechniqueCard( {technique}: {technique: Technique} ) {
  return <div>
    <Card>
      <CardContent>
        A technique
        {technique.id} - {technique.name}
      </CardContent>
    </Card>
  </div>
}
