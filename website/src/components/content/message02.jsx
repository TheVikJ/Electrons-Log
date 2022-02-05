import React from 'react'
import Section from '../section'
import Typist from 'react-typist'
import LogEntry from '../system/logEntry'
import TerminalTyper from '../typography/terminalTyper'

function Message02({ setStatus, setKey }) {
  const onComplete = () => {
    setStatus((status) => {
      const newState = { ...status }
      newState[setKey] = true
      return newState
    })
  }

  return (
    <LogEntry
      header={'Message 02'}
      message={
        <TerminalTyper onTypingDone={onComplete}>
          <p>
            Message 003: [Post-Death Procedure Activated] [Message End]
            <Typist.Delay ms={500} />
            <br />
            Code-Name: &quot;CoffeeHour&quot;
            <Typist.Delay ms={500} />
            <br />
            <br />
            ⚡
            <br />
            Congratulations on solving the first puzzle!
            <Typist.Delay ms={500} />
            <br />
            ⚡
            <Typist.Delay ms={500} />
            <br />
            [Message End]
          </p>
        </TerminalTyper>
      }
    />
  )
}

export default Message02
