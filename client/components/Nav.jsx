import React from 'react'

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <h2 className="nav-header">EO</h2>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            {' '}
            <a href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
