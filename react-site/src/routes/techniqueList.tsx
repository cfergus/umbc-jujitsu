import { createFileRoute } from '@tanstack/react-router'
import { TechniqueCard } from '../components/TechniqueCard'
import allTechniquesJSON from '../data/techniques.json'
import { Technique } from '../models/technique'
import { Box, Stack } from '@mui/material';

const allTechniques = allTechniquesJSON as Technique[];

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

    {allTechniques.map( (t) => <TechniqueCard technique={t}></TechniqueCard> )}
  </Stack>
  
}
