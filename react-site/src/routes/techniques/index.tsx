import { createFileRoute } from '@tanstack/react-router'
import { allTechniquesJoined } from '../../data/data-service';
import { TechniqueListComponent } from '../../components/TechniqueList';

const techniques = allTechniquesJoined();

export const Route = createFileRoute('/techniques/')({
  component: TechniqueIndexComponent,
})

function TechniqueIndexComponent() {

  return <TechniqueListComponent techniques={techniques} />
  
}
