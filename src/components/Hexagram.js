import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import StateContext from './StateContext'

const Line = ({ value }) => {
  const animProps = useSpring({ opacity: 1, from: { opacity: 0 }})

  const mutant = value === 6 || value === 9
  const yin = value === 6 || value === 8
  const yang = value === 7 || value === 9

  return (
    <div className={`${yin ? 'yin' : ''} ${yang ? 'yang' : ''} ${mutant ? 'mutant' : ''}`}>
      {yin && (
        <>
          <animated.div style={animProps} />
          <animated.div style={animProps} />
        </>
      )}
      {yang && <animated.div style={animProps} />}
      {!yin && !yang && <div />}
    </div>
  )
}

const Hexagram = ({ lines }) => {
  const { theme } = useContext(StateContext)

  let h = Array.from(lines)
  const diff = 6 - h.length

  if ( diff > 0) {
    for (let i = 0; i < diff; i++) {
      h = [-1].concat(h)
    }
  }

  return (
    <div className={`hexagram ${theme}`}>
      {h.map((value, index) => (
        <Line key={`${index}-${value}`} value={value} />
      ))}
    </div>
  )
}

export default Hexagram
