import React from 'react'

export default function Sidebar({ open, handleSidebar }) {
  return (
    <div className={open ? 'sidebar sidebar-open' : 'sidebar'}>
      <button onClick={() => handleSidebar()}>
        <img
          className="menu-icon"
          src="/hamburger.png"
          alt="open navigation menu"
        />
      </button>

      <ul className="navigation">
        <a href="">
          <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
            About me
          </li>
        </a>
        <a href="">
          <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
            Portfolio
          </li>
        </a>
        <a href="">
          <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
            Services
          </li>
        </a>
        <a href="">
          <li className={open ? 'nav-link nav-link-visible' : 'nav-link'}>
            Contact
          </li>
        </a>
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
