import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx';
import Services from './components/Services.jsx';

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?
    localStorage.getItem('theme') : "light")
  return (
    <div className='dark:bg-black relative'>
       < Navbar theme = {theme} setTheme={setTheme}/>
       <Hero/>
       <TrustedBy/>
       <Services/>
    </div>
  )
}

export default App