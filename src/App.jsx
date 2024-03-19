
import Navbar from './components/Navbar'
import Home from './components/Home'
import Posts from './components/Posts'
import Todos from './components/Todos'
import User from './components/User'
import Footer from './components/Footer'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/>
      <Footer /></>
    },
    {
      path: "/posts",
      element:<> <Navbar/><Posts/>
      <Footer /></>
    },
    {
      path: "/todos",
      element:  <><Navbar/><Todos/>
      <Footer /></>
    },
    {
      path: "/user",
      element:  <><Navbar/><User/>
      <Footer /></>
    },
    
    
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
 
  )
 
  }

export default App
