import React, { useState } from 'react'
import propTypes from 'prop-types'
import Terminal from './terminal'
import Subheader from '../typography/subheader'

const lines = [
  '⚡ Wow, even my brother could guess that one ⚡',
  "⚡ That one's so easy ⚡",
  '⚡ You should be ashamed ⚡',
  "⚡ You're not only dumb, but also stupid ⚡",
  '⚡ You have the IQ of a plant ⚡',
  '⚡ I could make a short joke if you plotted your IQ ⚡',
  "⚡ You're so dumb, you didn't even notice the lack of an apostrophe ⚡",
  "⚡ I'm only half human but I feel the emotion of pity extremely strongly ⚡",
  "⚡ Okay, I'll ask you an easier question: what's 1 + 1? ⚡",
  '⚡ Oh whoops, I forgot to put these questions in your language; Goo Goo Ga Ga ⚡',
  "⚡ You probably don't know how to use a semicolon ⚡",
]
const getFailLine = () => {
  const random = Math.floor(Math.random() * lines.length)
  return lines[random]
}

function Puzzle({ message, password, inputDelay, header, setStatus, setKey }) {
  const [isComplete, setIsComplete] = useState(false)
  return (
    <>
      <Subheader>{header}</Subheader>
      <Terminal
        commands={{
          guess: (args) => {
            if (args.toLowerCase().trim().replace(/ /g, '') === password) {
              setIsComplete(true)
              setStatus((status) => {
                const newState = [...status]
                newState[setKey] = true
                return newState
              })
              return '⚡ CORRECT! ⚡'
            }
            return getFailLine()
          },
        }}
        message={message}
        inputDelay={isComplete ? -1 : inputDelay}
      />
      {/*<p></p>*/}
    </>
  )
}

Puzzle.propTypes = {
  message: propTypes.element.isRequired,
  password: propTypes.string.isRequired,
  inputDelay: propTypes.number,
  header: propTypes.string.isRequired,
}

Puzzle.defaultProps = {
  inputDelay: 0,
}

export default Puzzle
