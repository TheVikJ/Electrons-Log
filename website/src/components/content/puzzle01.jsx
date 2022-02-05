import React from 'react'
import Puzzle from '../system/puzzle'
import TerminalTyper from '../typography/terminalTyper'
import Typist from 'react-typist'

function Puzzle01({ setStatus, setKey }) {
  return (
    <Puzzle
      password={'blahaj'}
      inputDelay={6000}
      header={'Puzzle 1'}
      setStatus={setStatus}
      setKey={setKey}
      message={
        <TerminalTyper>
          Message 02: [Post-Death Procedure Activated]
          <Typist.Delay ms={500} />
          <br />
          Code-Name: &quot;CoffeeHour&quot;
          <br />
          ⚡
          <br />
          This one should ease you into it. Please unlock Entry 1.
          <br />
          ⚡
          <Typist.Delay ms={500} />
          <br />
          [Message End]
          <br />
          <a
            href={
              'https://drive.google.com/drive/folders/1ahfAY1IcQquJkl6GshA-irA8e5091JhL?usp=sharing'
            }
            target={'_blank'}
            rel={'noreferrer'}
          >
            https://drive.google.com/drive/folders/1ahfAY1IcQquJkl6GshA-irA8e5091JhL?usp=sharing
          </a>
        </TerminalTyper>
      }
    />
  )
}

export default Puzzle01
