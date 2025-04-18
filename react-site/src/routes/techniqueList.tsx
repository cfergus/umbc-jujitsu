import { createFileRoute } from '@tanstack/react-router'
import { TechniqueCard } from '../components/TechniqueCard'
import allTechniques from '../data/techniques.json'


export const Route = createFileRoute('/techniqueList')({
  component: TechniqueListComponent,
})

function TechniqueListComponent() {


  return <div>
    {allTechniques.map( (t) => <TechniqueCard technique={t}></TechniqueCard> )}
  </div>
  
}
