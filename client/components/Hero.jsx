import React from 'react'
import HeroImage from './HeroImage'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <>
      <section className="hero-container" id="hero">
        <div className="hero-content">
          <h1 className="title">Eamonn O&apos;Sullivan</h1>
          <h3 className="subtitle">Web Developer</h3>

          <div className="about">
            I am a dynamic and challenge-driven professional transitioning from
            the travel and accommodation sector into a career in Software
            Development with a focus on Front End Web Development. I am
            passionate about continuous improvement, not only for my teams but
            for myself, and I am committed to learning new skills and
            capabilities to support my colleagues in overcoming complex
            problems.
          </div>
          <SocialLinks />
        </div>
        <HeroImage />
      </section>
    </>
  )
}
