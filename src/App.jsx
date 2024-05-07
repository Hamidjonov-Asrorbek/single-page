import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Partners from './pages/Partners'
import './App.css';

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = '/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/partners' element={<Partners />}></Route>
      </Route>
    </>
  )
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
