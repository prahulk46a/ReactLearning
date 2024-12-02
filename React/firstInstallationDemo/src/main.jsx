// import { StrictMode } from 'react'=> It is used to double check 
import { createRoot } from 'react-dom/client'
import './index.css'

import NavBar from './componets/NavBar.jsx'
import Home from './componets/home.jsx'
import Footer from './componets/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <NavBar/>
    <Home/>
    <Footer/>
  </div>

)
