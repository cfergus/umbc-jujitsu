import { createFileRoute, notFound } from '@tanstack/react-router'
import { allBelts } from '../../data/data-service'

export const Route = createFileRoute('/belts/$beltId')({
  component: RouteComponent,
  loader: ( {params: { beltId }}) => {
    const belt = allBelts().find( b => b.id === beltId );
    if (!belt) {
      throw notFound()
    }
    return belt;
  },
  notFoundComponent: () => {
    return <p>Belt not found</p>
  },
})

function RouteComponent() {

  const belt = Route.useLoaderData();

  return <div>
      <span style={{backgroundColor: belt.color }}>&nbsp; __ </span>

      {belt.ordinalName} - {belt.colorName} belt
    </div>
}
