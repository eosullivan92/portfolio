import React from 'react'

export default function SocialLinks() {
  return (
    <>
      <div className="social-container">
        <div className="social-item">
          <a
            href="https://www.linkedin.com/in/eosullivan9/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="linkedin" />
            <p className="url">https://www.linkedin.com/in/eosullivan9/</p>
          </a>
        </div>

        <div className="social-item">
          <a
            href="https://www.linkedin.com/in/eosullivan9/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="github" />
            <p className="url">https://github.com/eosullivan92/portfolio</p>
          </a>
        </div>
      </div>
    </>
  )
}
