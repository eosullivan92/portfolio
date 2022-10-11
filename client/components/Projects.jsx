import React from 'react'

export default function Projects() {
  const projectData = [
    {
      name: 'Colorful Life',
      subtitle: 'A color palette generator',
      link: 'https://colorful-life.herokuapp.com/',
      screenshot: '/color-still.png',
      repository: 'https://github.com/eosullivan92/color-palette-generator',
      stack: 'CSS, React, Express, SQLite3',
      reflection:
        "This was a personal project I started while at Dev Academy. I wanted to create a full stack application where I could apply the concepts I was learning at the course in my own context. Won\t be competing with Adobe at this stage but it's rewarding to be able to use something you have created yourself. ",
      takeaways: [
        'CSS can get tricky to manage as the project scales. This experience prompted me to move to SASS for future projects (including this portfolio) and I am loving the modular nature of it.',
        'This project gave me a lot of practice making API calls, and using state to make specific requests depending on user colors.',
        'The CRUD features are not currently working on iOS or Safari due to issues with the auth0 authentication tokens on their free-plan. I plan to look into alternatives very soon.',
      ],
    },
    {
      name: 'Plantasia',
      subtitle: 'Your houseplants best friend',
      link: 'https://plantasia2000.herokuapp.com/',
      screenshot: '/Artboard 1.png',
      stack: 'CSS, React, Redux, MaterialUI, Express, SQLite3',
      repository: 'https://github.com/eosullivan92/Plantasia',
      reflection:
        'This was a group project that I was involved in at Dev Academy Aotearoa. It is a personal houseplant tracker with C.R.U.D. functionality. Users can input plant care information and keep track of when plants are in need of water.',
      takeaways: [
        'The biggest takeaway from this project was the experience of working within a group. I was in charge of our gitflow, and I enjoyed the challenge of bringing each teammembers work together into one cohesive application.  ',
        'We applied agile work practices throughout this project, and it highlighted the benefits of breaking down the project into sprints to keep everyone focused on a common goal.',
        "One of my contributions was implementing the image upload feature. This was something I was new too, so it was quite rewarding to get that working. I don't think it would have felt complete without this feature.",
      ],
    },
  ]

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectData.map((project, i) => (
          <div className="project" key={i}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
