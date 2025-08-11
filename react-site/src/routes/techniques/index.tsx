import { createFileRoute } from '@tanstack/react-router'
import { allTechniquesJoined } from '../../data/dataService.ts';
import { TechniqueListComponent } from '../../components/TechniqueList.tsx';

const techniques = allTechniquesJoined();

export const Route = createFileRoute('/techniques/')({
  component: TechniqueIndexComponent,
})

function TechniqueIndexComponent() {

  return <TechniqueListComponent techniques={techniques} />
  
}
