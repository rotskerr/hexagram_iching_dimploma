import React from 'react'

const StateContext = React.createContext({
  theme: 'light',
  step: 'start',
  hexagram: [],
})

export default StateContext
