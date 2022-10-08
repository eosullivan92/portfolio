import React from 'react'
import HeroImage from './HeroImage'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1 className="title">Eamonn O&apos;Sullivan</h1>
        <h3 className="subtitle">A Web Developer</h3>

        <div className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          asperiores harum fuga quidem, sapiente architecto nam ex quis, itaque
          aliquam necessitatibus repellendus, nemo labore modi sit? A quo
          asperiores nam! Dolorem, sint? Corrupti in porro incidunt explicabo
          repellendus aspernatur molestiae corporis officiis nemo tempore qui
          illum deserunt earum, pariatur esse alias accusamus odio temporibus
          iste magnam tenetur. Labore, voluptas eveniet.
        </div>
        <SocialLinks />
      </div>
      <HeroImage />
    </>
  )
}
