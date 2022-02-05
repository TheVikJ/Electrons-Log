import React, { useEffect, useState } from 'react'
import { ReactTerminal } from 'react-terminal'
import { TerminalContextProvider } from 'react-terminal'

function Terminal({ inputDelay, message, commands }) {
  const [inputEnabled, setInputEnabled] = useState(inputDelay > 0)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setInputEnabled(inputDelay > 0)
    }, inputDelay)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [inputDelay])

  return (
    <TerminalContextProvider>
      <span className={'w-11/12 max-w-lg lg:max-w-screen-md h-auto mt-6'}>
        <ReactTerminal
          prompt={'electron-system:$'}
          welcomeMessage={message}
          commands={{
            ...commands,
            clear: '',
          }}
          enableInput={inputEnabled}
          theme={'material-dark'}
          showControlBar={false}
          errorMessage={
            "⚡ type your guess after writing 'guess'. Don't be an idiot! ⚡"
          }
        />
      </span>
    </TerminalContextProvider>
  )
}

export default Terminal
