import React from 'react'

export default function Header() {
  return (
    <>
      <header className="horizontal-header">
        <div className="title-container">
          <a href="/#home">
            <h2 className="logo-title">EO</h2>
          </a>
          <p className="name-title">Eamonn O&apos;Sullivan</p>
        </div>
        <a href="/contact">
          <div className="block-text">CONTACT</div>
        </a>
      </header>
    </>
  )
}
