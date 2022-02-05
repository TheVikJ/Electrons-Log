import Intro from '../components/intro'
import Notice from '../components/notice'
import Prologue from '../components/prologue'
import LazyLoad from 'react-lazyload'
import { useState } from 'react'
import puzzleData, { types as puzzleTypes } from '../data/puzzleData'
import Puzzle from '../components/system/puzzle'
import TerminalTyper from '../components/typography/terminalTyper'
import Typist from 'react-typist'
import LogEntry from '../components/system/logEntry'
import Head from 'next/head'

const GenerateLines = ({ lines, file, onTypingDone }) => {
  return (
    <TerminalTyper onTypingDone={onTypingDone}>
      <p>
        <Typist.Delay ms={500} />
        {lines[0]}
        <br />
        {lines[1]}
        <Typist.Delay ms={500} />
        <br />
        {lines[2]}
        <Typist.Delay ms={500} />
        <br />
        {lines[3]}
        <Typist.Delay ms={500} />
        <br />
        {lines[4]}
        <Typist.Delay ms={500} />
        <br />
        {lines[5]}
        <br />
        {file ? (
          <a href={file} rel={'noreferrer'} target={'_blank'}>
            {file}
          </a>
        ) : (
          ''
        )}
      </p>
    </TerminalTyper>
  )
}

const Link = ({ href }) => {
  return (
    <a href={href} rel={'noreferrer'} target={'_blank'}>
      {href}
    </a>
  )
}

export default function Home() {
  const [completedStatus, setCompletedStatus] = useState(
    puzzleData.map((_, index) => index === 0)
  )

  const [gameCompleted, setGameCompleted] = useState(false)

  const renderEntries = puzzleData
    .filter((x, index) => completedStatus[index])
    .map((entry, index) => {
      const entryNumber = Math.floor(index / 2) + 1
      if (entry.type === puzzleTypes.puzzle) {
        return (
          <Puzzle
            key={index}
            header={`Puzzle ${entryNumber}`}
            password={entry.password}
            inputDelay={4000}
            setStatus={setCompletedStatus}
            setKey={index === completedStatus.length ? index : index + 1}
            message={<GenerateLines file={entry.file} lines={entry.lines} />}
          />
        )
      }

      const onComplete = () => {
        if (index + 1 === completedStatus.length) {
          setGameCompleted(true)
          return
        }

        setCompletedStatus((x) => {
          const newState = [...x]
          newState[index === completedStatus.length ? index : index + 1] = true
          return newState
        })
      }

      return (
        <LogEntry
          key={index}
          header={`Message ${entryNumber}`}
          message={
            <GenerateLines
              lines={entry.lines}
              file={entry.file}
              onTypingDone={onComplete}
            />
          }
        />
      )
    })

  return (
    <main className={'min-h-screen bg-slate-900 w-full'}>
      <Head>
        <title>Electron&abpos;s Log</title>
      </Head>
      <Intro to={'notice'} />
      <Notice to={'prologue'} />
      <Prologue to={'start'} />
      <LazyLoad>{renderEntries}</LazyLoad>
      <br id={'start'} />
      {gameCompleted && (
        <LogEntry
          header={'Congratulations!'}
          message={
            <TerminalTyper>
              <p>Congratulations on completing the ARG!</p>
              <Typist.Delay ms={500} />
              <p>
                This would not have been possible without the awesome people
                below!
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
                  Dhruman Gupta (
                  <Link href={'https://github.com/DhrumanGupta/'} />)
                </li>
                <li>
                  Adam Drummond (<Link href={'http://adamd.fyi/'} />)
                </li>
                <li>
                  Aashi Shah (<Link href={'https://aashishah.tech/'} />)
                </li>
                <li>nfreak141</li>
                <li>
                  Kshitij Bhatia (
                  <Link href={'https://github.com/PreciousWarrior/'} />)
                </li>
                <li>
                  Blahaj Gan (
                  <Link href={'http://blahaj.lol/discord/'} />)
                </li>
              </ul>
            </TerminalTyper>
          }
        />
      )}
    </main>
  )
}
