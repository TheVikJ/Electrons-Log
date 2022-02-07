import React from 'react'
import TerminalTyper from './typography/terminalTyper'
import Typist from 'react-typist'
import LogEntry from './system/logEntry'

const Link = ({ href }) => {
  return (
    <a href={href} rel={'noreferrer'} target={'_blank'}>
      {href}
    </a>
  )
}

function Credits() {
  return (
    <LogEntry
      header={'Congratulations!'}
      message={
        <TerminalTyper>
          <p>Congratulations on completing the ARG!</p>
          <Typist.Delay ms={500} />
          <p>
            This would not have been possible without the awesome people below!
          </p>
          <Typist.Delay ms={500} />
          <p>
            Made by Vikramaditya Jaisingh//ElectronDeLaScoop (
            <Link href={'https://github.com/TheVikJ'} />)
          </p>
          <Typist.Delay ms={500} />
          <p>Special Thanks:</p>
          <ul>
            <li>
              - Dhruman Gupta (
              <Link href={'https://github.com/DhrumanGupta/'} />)
            </li>
            <li>
              - Adam Drummond (<Link href={'http://adamd.fyi/'} />)
            </li>
            <li>
              - Aashi Shah (<Link href={'https://aashishah.tech/'} />)
            </li>
            <li>- nfreak141</li>
            <li>
              - Kshitij Bhatia (
              <Link href={'https://github.com/PreciousWarrior/'} />)
            </li>
            <li>
              - Blahaj Gang (
              <Link href={'http://blahaj.lol/discord/'} />)
            </li>
          </ul>
        </TerminalTyper>
      }
    />
  )
}

export default Credits
