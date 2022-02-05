import React from 'react'
import Section from '../section'
import Typist from 'react-typist'
import LogEntry from '../system/logEntry'
import TerminalTyper from '../typography/terminalTyper'

function Message01({ setStatus, setKey }) {
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
            Message 01: [Post-Death Procedure Activated]
            <Typist.Delay ms={500} />
            <br />
            Code-Name: &quot;The Game is Afoot&quot;
            <Typist.Delay ms={500} />
            <br />
            <br />
            ⚡
            <br />
            Thank you for activating my memory retrieval system. Each log is
            locked behind a password that has been set by Electron. You shall
            get clues to unlock these logs. There are 7 in total, and each will
            reveal more about Vikram and me. This is of extreme importance,
            especially for Vikram. <Typist.Delay ms={500} />
            Thank you.
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

export default Message01
