import React from 'react'

const Coin = ({ value, classes }) => {
  const facet = value === 0 ? 'yin' : 'yang'

  return (
    <svg className={`coin ${classes}`}>
      <circle className={`${facet}`} cx="50%" cy="50%" r="45%" />
    </svg>
  )
}

export default Coin
