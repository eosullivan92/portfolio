import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Sidebar from './Sidebar'
import SingleProject from './SingleProject'

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
        <Header />
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
