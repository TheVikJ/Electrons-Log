import Intro from '../components/intro'
import Notice from '../components/notice'
import Prologue from '../components/prologue'
import LazyLoad from 'react-lazyload'
import { useEffect, useRef, useState } from 'react'
import puzzleData, { types as puzzleTypes } from '../data/puzzleData'
import Puzzle from '../components/system/puzzle'
import TerminalTyper from '../components/typography/terminalTyper'
import Typist from 'react-typist'
import LogEntry from '../components/system/logEntry'
import Head from 'next/head'
import Credits from '../components/credits'
import useUser from '../hooks/useUser'
import Loading from '../components/UI/Loading'
import { SecondaryButton as Button } from '../components/UI/button'
import { logout } from '../utils/userApi'

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

export default function Home() {
  const [completedStatus, setCompletedStatus] = useState(
    puzzleData.map((_, index) => index === 0)
  )

  const [gameCompleted, setGameCompleted] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView(false)
  }, [completedStatus, gameCompleted])

  const { loading, loggedIn, mutate } = useUser()

  if (loading) {
    return <Loading />
  }

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
    <main className={'w-full'}>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Electron's Log</title>
      </Head>
      <Intro to={loggedIn ? 'prologue' : 'notice'} />
      {!loggedIn && <Notice to={'prologue'} />}
      <Prologue to={'start'} pos={loggedIn ? 1 : 2} />
      <LazyLoad>{renderEntries}</LazyLoad>
      {gameCompleted && <Credits />}
      {!gameCompleted && (
        <div className={'h-[70vh] w-full'} id={'start'} ref={scrollRef} />
      )}

      {loggedIn && (
        <Button
          className={'fixed top-0 right-0 mr-5 mt-5'}
          onClick={async () => {
            await logout()
            mutate()
          }}
        >
          Logout
        </Button>
      )}
    </main>
  )
}
