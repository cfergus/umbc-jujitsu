import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Technique } from '../models/technique'

export function TechniqueCard( {technique}: {technique: Technique} ) {
  return <div>
    <Card>
      {/* <CardMedia 
        image="https://placehold.co/600x400" 
        title="placeholder"
        sx={{ height: 140 }}
      /> */}
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {technique.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {technique.name}
        </Typography>
      </CardContent>
    </Card>
  </div>
}
