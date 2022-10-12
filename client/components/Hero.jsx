import React from 'react'
import HeroImage from './HeroImage'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <>
      <section className="hero-container" id="about">
        <div className="hero-content">
          <h1 className="title">Eamonn O&apos;Sullivan</h1>
          <h3 className="subtitle">Web Developer</h3>

          <div className="about">
            I am a dynamic and challenge-driven professional with a love for
            Front End Web Development. I started my Web Development journey in
            September 2021 and found myself instantly captivated by the endless
            opportunities for creativity and problem solving when creating fun
            and satisfying user experiences. I am passionate about continuous
            improvement, not only for my teams but for myself, and I am
            committed to learning new skills and capabilities to support my
            colleagues in overcoming complex problems.
          </div>
          <SocialLinks />
        </div>
        <HeroImage />
      </section>
    </>
  )
}
