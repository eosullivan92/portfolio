import React from 'react'
import { IconContext } from 'react-icons'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { HiOutlineDocumentDownload, HiCode } from 'react-icons/hi'

export default function SocialLinks() {
  return (
    <>
      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/eosullivan9/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-item">
            <IconContext.Provider
              value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
            >
              <SiLinkedin />
            </IconContext.Provider>
            <p className="url">linkedin/eosullivan9</p>
          </div>
        </a>

        <a
          href="https://github.com/eosullivan92"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-item">
            <IconContext.Provider
              value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
            >
              <SiGithub />
            </IconContext.Provider>
            <p className="url">github/esosullivan92</p>
          </div>
        </a>
        <a href="/EamonnOsullivan-CV.pdf" download="Eamonn O'Sullivan CV">
          <div className="social-item">
            <IconContext.Provider
              value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
            >
              <HiOutlineDocumentDownload />
            </IconContext.Provider>
            <p className="url">Download CV</p>
          </div>
        </a>
        <a
          href="https://github.com/eosullivan92/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-item">
            <IconContext.Provider
              value={{ style: { fontSize: '1.5rem' }, color: '#072ac8' }}
            >
              <HiCode />
            </IconContext.Provider>
            <p className="url">Source Code</p>
          </div>
        </a>
      </div>
    </>
  )
}
