import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Analytics from './component/Analytics'
import NewsLatter from './component/NewsLatter'
import Cards from './component/Cards'
import Footer from './component/Footer'
function App() {
 

  return (
    <>
    <NavBar/>
    <Hero/>
    <Analytics/>
    <NewsLatter/>
    <Cards/>
    <Footer/>
  

    </>
  )
}

export default App
