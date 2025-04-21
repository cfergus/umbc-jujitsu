import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material'
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
          
          {technique.alternateNames?.map( (n) => <span>{n}<br/></span>) }

          {technique.category && 
            <>
              <Chip label={technique.category.name} component="a" href="#todo-chip-link" clickable />
              <br/>
            </>
          }

          {technique.beltLevel && 
            <span>
              <span> {technique.beltLevel.name} </span>
              <span style={{backgroundColor: technique.beltLevel.color }}>&nbsp; __ </span>
            </span>
          }
        </Typography>
      </CardContent>
    </Card>
  </div>
}
