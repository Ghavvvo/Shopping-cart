import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { ProfilesPage } from './components/ProfilesPage'
import {NotFound} from "./components/NotFound.tsx";
import {ProfilePage} from "./components/ProfilePage.tsx";
import {FilterContextProvider} from "./context/filterContext.tsx";

const router = createBrowserRouter([

  {
    path:'/',
    element: <App/>,
    errorElement : <NotFound/>

  },
  {
    path:'/profiles',
    element: <ProfilesPage/>,
    children:[
      {
        path:'/profiles/:id',
        element: <ProfilePage/>,

      }
    ]
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilterContextProvider>
      <App/>
    </FilterContextProvider>

  </StrictMode>,
)
