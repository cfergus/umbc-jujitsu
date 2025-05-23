import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import JujitsuAppBar from 'src/components/JujitsuAppBar.tsx'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <JujitsuAppBar></JujitsuAppBar>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
