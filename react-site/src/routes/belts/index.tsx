import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { allBelts } from '../../data/dataService.ts';
import { Grid } from '@mui/material';
import { BeltCard } from 'src/components/BeltCard.tsx';

const belts = allBelts();

export const Route = createFileRoute('/belts/')({
  component: BeltListComponent,
})

function BeltListComponent() {
  return <Grid container spacing={2}>
    { belts.map( belt => {
      return <Grid 
          key={belt.id}
          size={{ xs: 12, md: 6}}>
        <BeltCard belt={belt} />
      </Grid>
    })}
  
  </Grid>
  
}
