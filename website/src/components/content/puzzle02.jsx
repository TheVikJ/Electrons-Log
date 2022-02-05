import React from 'react'
import Puzzle from '../system/puzzle'
import TerminalTyper from '../typography/terminalTyper'
import Typist from 'react-typist'

export default function Puzzle02({ setStatus, setKey }) {
  return (
    <Puzzle
      password={'thomson'}
      inputDelay={6000}
      header={'Puzzle 2'}
      setStatus={setStatus}
      setKey={setKey}
      message={
        <TerminalTyper>
          Message 0004: [Post-Death Procedure Activated]
          <Typist.Delay ms={500} />
          <br />
          Code-Name: &quot;TheNextOne&quot;
          <br />
          ⚡
          <br />
          Good job everyone on making it this far... Use your skills from the
          first one to guide you to find Entry 2.
          <br />
          ⚡
          <Typist.Delay ms={500} />
          <br />
          [Message End]
          <br />
          <a
            href={
              'https://drive.google.com/drive/folders/16FVX1CjdaXGmstkWF7304pf5ODzYo8NG?usp=sharing'
            }
            target={'_blank'}
            rel={'noreferrer'}
          >
            https://drive.google.com/drive/folders/16FVX1CjdaXGmstkWF7304pf5ODzYo8NG?usp=sharing
          </a>
        </TerminalTyper>
      }
    />
  )
}
