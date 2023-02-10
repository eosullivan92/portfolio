import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projectData } from '../projectData'
import { RxArrowRight } from 'react-icons/rx'
import StackIconTag from './StackIconTag'

export default function SingleProject() {
  const navigate = useNavigate()
  const { id } = useParams()
  const project = projectData.find((project) => project.id == id)

  const handleNextProject = () => {
    if (id < 4) {
      navigate(`/portfolio/${Number(id) + 1}`)
    } else {
      navigate(`/portfolio/1`)
    }
  }

  return (
    <>
      {project && (
        <div className="single-project-container">
          <div className="project-header-flex">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <a
                href={project.link}
                className="project-url"
                target="_blank"
                rel="noreferrer"
              >
                {project.link}
              </a>
            </div>
            <button
              className="next-project"
              aria-label="next project"
              onClick={() => handleNextProject()}
            >
              Next Project
              <RxArrowRight />
            </button>
          </div>
          <div className="project-flex">
            <div className="project-info">
              <div className="stack-container">
                {Object.keys(project.stack).map((key) => {
                  return (
                    <StackIconTag
                      key={key}
                      name={key}
                      Icon={project.stack[key]}
                    />
                  )
                })}
              </div>

              <p>{project.description}</p>

              <div className="project-info-item">
                <span className="bold">Github:</span>{' '}
                <a href={project.repository} target="_blank" rel="noreferrer">
                  {project.repository}
                </a>
              </div>

              <p className="bold">Reflection:</p>
              <ul>
                {project.reflections.map((reflection, i) => (
                  <li key={i}>{reflection}</li>
                ))}
              </ul>
            </div>
            <div className="project-image">
              <img src={project.screenshot} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
