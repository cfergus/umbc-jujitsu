import { Card, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material'
import { Technique } from 'src/models/technique.ts'

export function TechniqueCard( {technique}: {technique: Technique} ) {
  return <div>
    <Card>
      {/* <CardMedia 
        image="https://placehold.co/600x400" 
        title="placeholder"
        sx={{ height: 140 }}
      /> */}
        
      <CardHeader title={technique.name}>
        <Typography gutterBottom variant="h5" component="div">
          {technique.name}
        </Typography>
      </CardHeader>
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
          {technique.alternateNames?.map( (n) => <span key={n}>{n}<br/></span>) }

          {technique.category && 
            <>
              <Chip label={technique.category.name} component="a" href="#todo-chip-link" clickable />
              <br/>
            </>
          }

          {technique.beltLevel && 
            <span>
              <span style={{backgroundColor: technique.beltLevel.color }}> {technique.beltLevel.name} </span>
            </span>
          }
        </Typography>
      </CardContent>
    </Card>
  </div>
}
