import React from 'react'

const Stories = () => {
  return (
      <div className='stories-container'>
        {Array(10).fill(0).map((_, idx) => (
          <div className='stories-circle' key={idx}>
            <img src='src/assets/LSH69216003-1716455496501095941-Male_iLc50OHUqdVmovPJ_60X60.webp' alt='story-img' />
          </div>
        ))}
      </div>
  )
}

export default Stories
