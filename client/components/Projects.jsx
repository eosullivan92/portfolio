import React from 'react'
import Project from './Project'

export default function Projects() {
  const projectData = [
    {
      name: 'The Lost Crates',
      subtitle: 'Full stack e-commerce platform',
      link: 'https://www.thelostcrates.co.nz/',
      screenshot: '/lostcrates.png',
      repository: 'https://github.com/eosullivan92/lost-crates',
      stack: 'React, Redux, Sass, Express, SQLite3/Postgres',
      description:
        'Full stack e-commerce project where users can add/remove to cart and place orders. Orders are saved in a database, and can be fetched with an order ID. State on the front end is managed using Redux and will persist via local storage.',
      reflections: [
        'I started this project to sharpen my backend skills, utilising multiple database tables and storing order information. This gave me a lot of practice making joins across tables and manipulating data to get it ready for the frontend.',
        'I am enjoying getting familiar with Redux to handle more complicated application states',
        'In the future I would like to implement an admin portal to perform CRUD operations on the backend.',
      ],
    },
    {
      name: 'Colorful Life',
      subtitle: 'A color palette generator',
      link: 'https://colorful-life.herokuapp.com/',
      screenshot: '/color-still.png',
      repository: 'https://github.com/eosullivan92/color-palette-generator',
      stack: 'CSS, React, Express, SQLite3',
      description:
        'This was a personal project I started while at Dev Academy. I wanted to create a full stack application where I could apply the concepts I was learning at the course in my own context.',
      reflections: [
        'CSS can get tricky to manage as the project scales. This experience prompted me to move to SASS for future projects (including this portfolio) and I am loving the modular nature of it.',
        'This project gave me a lot of practice making API calls, and using state to make specific requests depending on user colors.',
        'The CRUD features are not currently working on iOS or Safari due to issues with the auth0 authentication tokens on their free-plan. I plan to look into alternatives very soon.',
      ],
    },
    {
      name: 'Plantasia',
      subtitle: 'Your houseplants favourite app',
      link: 'https://plantasia2000.herokuapp.com/',
      screenshot: '/plantasia-2.png',
      stack: 'CSS, React, Redux, MaterialUI, Express, SQLite3',
      repository: 'https://github.com/eosullivan92/Plantasia',
      description:
        'This was a group project that I was involved in at Dev Academy Aotearoa. It is a personal houseplant tracker with C.R.U.D. functionality. Give your plants the love they deserve.',
      reflections: [
        'The biggest takeaway from this project was the experience of working within a group. I was in charge of our gitflow, and I enjoyed the challenge of bringing each feature together.',
        'We applied agile work practices throughout this project, and it highlighted the benefits of breaking down the project into sprints to keep everyone focused on a common goal.',
        'One of my contributions was implementing the image upload feature. This was something I was new too, so it was quite rewarding to get that working. ',
      ],
    },
  ]

  return (
    <section className="projects-container" id="projects">
      <h2>A sample of my work...</h2>
      <div className="projects-grid">
        {projectData.map((project, i) => (
          <Project project={project} key={i} index={i} />
        ))}
      </div>
    </section>
  )
}
