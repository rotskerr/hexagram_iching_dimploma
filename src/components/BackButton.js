import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import StateContext from './StateContext'

const BackButton = ({ onBack }) => {
  const { theme } = useContext(StateContext)

  const animProps = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div
      className={`back-button ${theme}`}
      style={animProps}
      onClick={onBack}
    >
      <svg viewBox="0 0 512 512">
        <path
          d="M477.9,221.9H116.5L263.1,75.3c13.3-13.3,13.3-34.9,0-48.3c-13.3-13.3-34.9-13.3-48.3,0L10,231.9C3.6,238.2,0,247,0,256
 s3.6,17.8,10,24.1l204.8,204.8c13.3,13.3,34.9,13.3,48.3,0c13.3-13.3,13.3-34.9,0-48.2L116.5,290.1h361.4
 c18.9,0,34.1-15.3,34.1-34.1C512,237.1,496.7,221.9,477.9,221.9z"
        />
      </svg>
    </animated.div>
  )
}

export default BackButton
