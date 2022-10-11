import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Project({ project }) {
  const [selected, setSelected] = useState(false)
  return (
    <div className="project" onClick={() => setSelected((prev) => !prev)}>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <a href={project.link} className="project-url">
        {project.link}
      </a>
      <img
        src={project.screenshot}
        alt=""
        className={selected ? 'image-collapse' : 'image-high'}
      />
      {selected && (
        <motion.div
          className="project-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 0.7 }}
        >
          <p className="project-info-item">
            <span className="bold">Github:</span>{' '}
            <a href={project.repository}> {project.repository}</a>
          </p>
          <p className="project-info-item">
            {' '}
            <span className="bold">Description:</span> {project.description}
          </p>

          <p className="bold">Reflection:</p>
          <ul>
            {project.reflections.map((reflection, i) => (
              <li key={i}>{reflection}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}
