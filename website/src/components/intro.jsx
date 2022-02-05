import React from 'react'
import Typist from 'react-typist'
import { animated, config, useSpring } from 'react-spring'
import { IoIosArrowDown } from 'react-icons/io'
import Section from './section'

function Intro({ to }) {
  const arrowStyle = useSpring({
    config: config.stiff,
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 500,
    delay: 1000,
  })

  return (
    <Section className={'justify-center'}>
      <h1
        className={
          'text-white font-bold text-center text-2xl sm:text-4xl md:text-6xl'
        }
      >
        ⚡ Electron&apos;s Logs ⚡
      </h1>
      <p
        className={'text-slate-400 pt-4 font-xl text-xl md:text-xl lg:text-2xl'}
      >
        <Typist
          startDelay={550}
          stdTypingDelay={5}
          avgTypingDelay={80}
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 1000,
          }}
        >
          An adventure awaits you...
        </Typist>
      </p>

      <animated.span
        style={arrowStyle}
        className={`absolute flex flex-col w-full items-center bottom-0`}
      >
        <p className={'text-2xl text-slate-700 font-medium mb-4'}>SCROLL</p>

        <a
          href={`#${to}`}
          className={
            'duration-150 ease-in-out w-10 h-10 text-slate-300 hover:w-11 hover:h-11'
          }
        >
          <IoIosArrowDown className={'w-full h-full'} />
        </a>
        <br />
      </animated.span>
    </Section>
  )
}

export default Intro
