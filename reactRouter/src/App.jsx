import './App.css'

import { RouterProvider,  createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from './components/Layout'
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Github, { getUserData } from './components/Github/Github';
import Error from './components/Error';

function App() {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route path="" element={<Home />}  />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='github?/:id' element={<Github />} loader={getUserData} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
