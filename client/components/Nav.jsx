import React from 'react'

export default function Nav() {
  return (
    <>
      <header className="horizontal-header">
        <div className="title-container">
          <h2 className="logo-title">EO</h2>
          <p className="name-title">Eamonn O&apos;Sullivan</p>
        </div>
        <a href="/contact">
          <div className="block-text">CONTACT</div>
        </a>
      </header>
    </>
  )
}
