import { createFileRoute } from '@tanstack/react-router'
import { TechniqueCard } from '../components/TechniqueCard'
import { Grid } from '@mui/material';
import { allTechniquesJoined } from '../data/data-service';

const techniques = allTechniquesJoined();

export const Route = createFileRoute('/techniqueList')({
  component: TechniqueListComponent,
})

function TechniqueListComponent() {

  return <Grid container spacing={2}>
    {techniques.map( (t) => 
      <Grid 
          key={t.id}
          size={{ xs: 12, md: 6}}>
        <TechniqueCard technique={t}></TechniqueCard>
      </Grid> 
    )}
  </Grid>
  
}
