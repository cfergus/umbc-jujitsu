import { Grid } from "@mui/material";
import { Technique } from "../models/technique";
import { TechniqueCard } from "./TechniqueCard";

export function TechniqueListComponent( {techniques }: {techniques: Technique[]} ) {

    return <Grid container spacing={2}>
      {techniques.map( (t) => 
        <Grid 
            key={t.id}
            size={{ xs: 12, md: 6, lg: 4, xl: 3}}>
          <TechniqueCard technique={t}></TechniqueCard>
        </Grid> 
      )}
    </Grid>
    
  }