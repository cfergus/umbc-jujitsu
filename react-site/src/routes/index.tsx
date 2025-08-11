import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div>
      <p>Resources for UMBC Jujitsu techniques. </p>

      <p>
        The navigation bar at the top has interactive components for exploring.
      </p>

      <p>
        The syllabus link in the navigation bar is current for the class.

        A non-interactive version of the year 2000 syllabus is also available at <a href="/syllabus.html">this link</a>. 
      </p>

      <p>
        You can also view the original syllabus as a PDF from year 2000 at <a href="/UMBC Jujitsu Syllabus.pdf">this link</a>.
      </p>

    </div>
  )
}
