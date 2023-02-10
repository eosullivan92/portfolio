import React from 'react'

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
            <img src="/icons/linkedin.png" alt="linkedin" />
            <p className="url">linkedin/eosullivan9</p>
          </div>
        </a>

        <a
          href="https://github.com/eosullivan92"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-item">
            <img src="/icons/github.png" alt="github" />
            <p className="url">github/esosullivan92</p>
          </div>
        </a>
        <a href="/EamonnOsullivan-CV.pdf" download="Eamonn O'Sullivan CV">
          <div className="social-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-inbox-download"
              width="38px"
              height="38px"
            >
              <path
                className="primary"
                d="M8 5H5v10h2a2 2 0 0 1 2 2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h2V5h-3a1 1 0 0 1 0-2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2z"
              />
              <path
                className="secondary"
                d="M11 10.59V4a1 1 0 0 1 2 0v6.59l1.3-1.3a1 1 0 0 1 1.4 1.42l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l1.3 1.3z"
              />
            </svg>
            <p className="url">Download CV</p>
          </div>
        </a>
        <a
          href="https://github.com/eosullivan92/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-code"
              height="38px"
              width="38px"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                className="primary"
                rx="2"
              />
              <path
                className="secondary"
                fill="#F7F7F7"
                d="M8.7 13.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 1 1 1.42-1.4l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.42-1.4zm-3.32 3.9a1 1 0 0 1-1.96-.4l2-10a1 1 0 0 1 1.96.4l-2 10z"
              />
            </svg>
            <p className="url">Source Code</p>
          </div>
        </a>
      </div>
    </>
  )
}
