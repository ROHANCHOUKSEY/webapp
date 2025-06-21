import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import EventRequest from './Component/EventRequest.jsx'
import EventName from './Component/EventName.jsx'

const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
      <Route path='/' element={<EventRequest/>}/>
      <Route path='eventname' element={<EventName/>}/>
    </Route>
  )
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
 