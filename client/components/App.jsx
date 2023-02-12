import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Sidebar from './Sidebar'
import SingleProject from './SingleProject'

function App() {
  const [open, setOpen] = useState(false)

  const handleSidebar = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className={`container`}>
      <Sidebar open={open} handleSidebar={handleSidebar} />
      <div className={open ? 'content content-pushed' : 'content'}>
        <Header open={open} handleSidebar={handleSidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutMe />
                <Projects />
              </>
            }
          />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/portfolio/:id" element={<SingleProject />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <>
                <AboutMe />
                <Projects />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
