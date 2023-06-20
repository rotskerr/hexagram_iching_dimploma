import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import Coin from './Coin'
import Hexagram from './Hexagram'
import StateContext from './StateContext'

const CoinShuffle = ({ theme }) => {
  const { coinResult, hexagram } = useContext(StateContext)

  // animate mount
  const animProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300 },
  })

  return (
    <animated.div className={`coinshuffle-container`} style={animProps}>
      <Hexagram lines={hexagram} theme={theme} />
      {coinResult.map((value, index) => (
        <Coin key={`coin${index}${hexagram.toString()}`} value={value} classes={`coin${index}`} />
      ))}
    </animated.div>
  )
}

export default CoinShuffle
