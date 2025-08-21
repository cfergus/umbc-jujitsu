import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import JujitsuAppBar from 'src/components/JujitsuAppBar.tsx'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <JujitsuAppBar></JujitsuAppBar>
      <div style={{margin: '12px' }}>
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
