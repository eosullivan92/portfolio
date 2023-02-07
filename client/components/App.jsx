import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'
import Nav from './Nav'
import Hero from './AboutMe'
import Projects from './Projects'
import Tools from './Tools'
import Contact from './Contact'
import Sidebar from './Sidebar'

function App() {
  const [open, setOpen] = useState(false)
  const [firstLoad, setFirstLoad] = useSessionStorage('firstLoad', true)

  const handleSidebar = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    setFirstLoad(false)
  }, [])

  return (
    <div className={firstLoad ? `container fade` : `container`}>
      <Sidebar open={open} handleSidebar={handleSidebar} />
      <div className={open ? 'content content-pushed' : 'content'}>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/about" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
