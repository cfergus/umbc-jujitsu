import { createFileRoute, notFound } from '@tanstack/react-router'
import { allBelts, allTechniquesJoined } from '../../data/dataService.ts'
import { Typography } from '@mui/material';
import { TechniqueListComponent } from 'src/components/TechniqueList.tsx';

export const Route = createFileRoute('/belts/$beltId')({
  component: RouteComponent,
  loader: ( {params: { beltId }}) => {
    const belt = allBelts().find( b => b.id === beltId );
    if (!belt) {
      throw notFound()
    }

    const techniques = allTechniquesJoined().filter( t => t.beltLevel?.id === beltId )

    return {
      belt: belt,
      techniques: techniques
    };
  },
  notFoundComponent: () => {
    return <p>Belt not found</p>
  },
})

function RouteComponent() {

  const routeData = Route.useLoaderData();
  const belt = routeData.belt;
  const techniques = routeData.techniques;

  return <div>
      
      <div id="belt-header" className={ `belt-${belt.id}` } style={{ height: 30 }}>
      </div>

      <Typography variant="h3">
        {belt.name}
      </Typography>
      {belt.ordinalName} - {belt.colorName} belt

      <div>
        <TechniqueListComponent techniques={techniques}>
        </TechniqueListComponent>

      </div>
    </div>
}
