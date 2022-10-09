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
            <img src="/linkedin.png" alt="linkedin" />
            <p className="url">eosullivan9</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/eosullivan9/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-item">
            <img src="/github.png" alt="github" />
            <p className="url">esosullivan92</p>
          </div>
        </a>
      </div>
    </>
  )
}
