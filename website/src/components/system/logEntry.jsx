import React from 'react'
import Typist from 'react-typist'
import Subheader from '../typography/subheader'
import Terminal from './terminal'

function LogEntry({ header, message }) {
  return (
    <>
      <Subheader>{header}</Subheader>
      <Terminal inputDelay={-1} message={message} />
    </>
  )
}

export default LogEntry
