import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ open, handleSidebar }) {
  return (
    <div className={open ? 'sidebar sidebar-open' : 'sidebar'}>
      <button onClick={() => handleSidebar()}>
        {open ? (
          <img
            aria-label="close menu"
            className="menu-icon"
            src="/cancel.png"
            alt="open navigation menu"
          />
        ) : (
          <img
            aria-label="open menu"
            className="menu-icon"
            src="/hamburger.png"
            alt="open navigation menu"
          />
        )}
      </button>

      <ul className="navigation">
        <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
          <a href="/#home">Home</a>
        </li>

        <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
          {/* <Link to="/portfolio">Portfolio</Link> */}
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/eosullivan9/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin.png" alt="linkedin" />
        </a>

        <a
          href="https://github.com/eosullivan92"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.png" alt="github" />
        </a>
      </div>
    </div>
  )
}
