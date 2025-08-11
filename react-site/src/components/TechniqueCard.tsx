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
        </Typography>

        {technique.category && 
            <Chip label={technique.category.name} />
        }
{/* 
For now, displaying colored/detailed belt level inline with the technique is distracting
In the future: figure out a better display for it, and make it an optional prop for the component
          {technique.beltLevel && 
            <div style= {{height: '20px', width: '40px' }} className={ `belt-${technique.beltLevel.id}` }>
              { {technique.beltLevel.name} }
            </div>
          } */}
          <Chip label={technique.beltLevel?.name} />
        
      </CardContent>
    </Card>
  </div>
}
