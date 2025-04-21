import { createFileRoute } from '@tanstack/react-router'
import { TechniqueCard } from '../components/TechniqueCard'
import { Technique } from '../models/technique'
import { Box, Stack } from '@mui/material';
import { allTechniquesJoined } from '../data/data-service';

const techniques = allTechniquesJoined();

export const Route = createFileRoute('/techniqueList')({
  component: TechniqueListComponent,
})

function TechniqueListComponent() {


  return <Stack 
    // spacing={{ sm:2 }}
    spacing={2}
    direction={{xs: 'column', sm: 'row'}}
    useFlexGap
    sx={{ flexWrap: 'wrap' }}>

    {techniques.map( (t) => <TechniqueCard technique={t}></TechniqueCard> )}
  </Stack>
  
}
