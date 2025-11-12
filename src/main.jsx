import React from 'react'
import { createRoot } from 'react-dom/client'   // correct for React 18+
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Layout/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "home", Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
