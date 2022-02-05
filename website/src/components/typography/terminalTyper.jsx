import React from 'react'
import Typist from 'react-typist'

function TerminalTyper({ children, onTypingDone }) {
  return (
    <Typist
      cursor={{ shown: false, element: '' }}
      stdTypingDelay={2}
      avgTypingDelay={15}
      onTypingDone={onTypingDone}
    >
      {children}
    </Typist>
  )
}

export default TerminalTyper
