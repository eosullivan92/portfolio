import React, { useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Projects from './Projects'
import Tools from './Tools'
import Contact from './Contact'
import Sidebar from './Sidebar'

function App() {
  const [open, setOpen] = useState(false)

  const handleSidebar = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="container">
      <Sidebar open={open} handleSidebar={handleSidebar} />
      <div className={open ? 'content content-pushed' : 'content'}>
        <Nav />
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </div>
    </div>
  )
}

export default App
