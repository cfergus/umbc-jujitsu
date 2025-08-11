import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { BeltLevel } from 'src/models/belt.ts'
import { MUIButtonLink } from "./MUIButtonLink.tsx";

export function BeltCard( {belt}: {belt: BeltLevel} ) {
  return <div>
    <Card>
      <CardHeader className={ `belt-${belt.id}` } />
      <CardContent>          
        <Typography gutterBottom variant="h5" component="div">
          {belt.name}
        </Typography>
          
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {belt.ordinalName} - {belt.colorName} belt
        </Typography>
      </CardContent>
      <CardActions>
        <MUIButtonLink to="/belts/$beltId"
          params={{
            beltId: belt.id
          }}
          activeProps={{
            className: 'font-bold',
          }}>
          Techniques
        </MUIButtonLink>
      </CardActions>
    </Card>
  </div>
}
