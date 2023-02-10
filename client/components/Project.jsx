import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Project({ project }) {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/portfolio/${id}`)
  }

  const handleKeyDownNavigate = (e, id) => {
    if (e.keyCode === 13) {
      navigate(`/portfolio/${id}`)
    }
  }

  return (
    <div
      role="button"
      className="project"
      onClick={() => handleNavigate(project.id)}
      onKeyDown={(e) => handleKeyDownNavigate(e, project.id)}
      tabIndex={0}
    >
      <h3 className="project-name">{project.name}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <a href={project.link} className="project-url">
        {project.link}
      </a>
      <div className="image-container">
        <picture>
          <source srcSet={project.screenshot} media="(min-width: 600px)" />
          <img
            src={project.screenshotmobile || project.screenshot}
            alt="project screenshot"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  )
}
