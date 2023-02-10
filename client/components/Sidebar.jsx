import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { SlMenu } from 'react-icons/sl'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { TfiClose } from 'react-icons/tfi'
import { IconContext } from 'react-icons'
import { useIsSmall } from '../hooks/useMediaQuery'

export default function Sidebar({ open, handleSidebar }) {
  const isSmall = useIsSmall()

  const handleClose = () => {
    if (isSmall) handleSidebar()
  }

  return (
    <div className={open ? 'sidebar sidebar-open' : 'sidebar'}>
      <button onClick={() => handleSidebar()}>
        <IconContext.Provider
          value={{ style: { fontSize: '1.7rem' }, color: '#072ac8' }}
        >
          {open ? <TfiClose /> : <SlMenu />}
        </IconContext.Provider>
      </button>

      <ul className="navigation">
        <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
          <HashLink to="/#home" onClick={() => handleClose()}>
            Home
          </HashLink>
        </li>

        <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
          <HashLink to="/#portfolio" onClick={() => handleClose()}>
            Portfolio
          </HashLink>
        </li>
        <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
          <Link to="/contact" onClick={() => handleClose()}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/eosullivan9/"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
          >
            <SiLinkedin />
          </IconContext.Provider>
        </a>

        <a
          href="https://github.com/eosullivan92"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
          >
            <SiGithub />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  )
}
