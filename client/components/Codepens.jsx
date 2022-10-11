import React from 'react'

export default function Codepens() {
  return (
    <section className="codepens-container">
      <h2>Some codepens...</h2>
      <div className="codepen-grid">
        {codepenData.map((codepen, i) => (
          <Codepen key={i} index={i} />
        ))}
      </div>
    </section>
  )
}
