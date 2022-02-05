import React from 'react'
import Subheader from './typography/subheader'
import Section from './section'
import Content from './typography/content'
import { IoIosArrowDown } from 'react-icons/io'

function Prologue({ to }) {
  return (
    <Section id={'prologue'}>
      <Subheader className={'mb-auto'}>Prologue</Subheader>
      <span className={'mb-auto'}>
        <article>
          <Content>
            Electron De La Scoop was a cyborg, a villain, and my brother. We
            didn&apos;t have the best relationship (he once kidnapped me and
            took me to the moon) but he was still my brother. However, I noticed
            that after that very incident, he wasn&apos;t himself at all, and my
            fears were sadly true. That was when Electron died.
          </Content>
          <br />
          <Content>
            Upon his death, he left me 7 entries in his memory retrieval system,
            each encoded in ciphers and puzzles, and he claimed that solving
            each of the entries would help me somehow. I enlisted the help of
            some of my fellow Blahaj Gangers who helped me uncover the full
            truth. This website is a remnant of the past, and a chance for you
            to explore Electron&apos;s Log, too...
          </Content>
          <br />
          <Content>- Vikram De La Scoop (PoopDeLaScoop#7482)</Content>
        </article>
      </span>

      <span
        className={'absolute flex flex-col w-full items-center -bottom-[200vh]'}
      >
        <a
          href={`#${to}`}
          className={
            'duration-150 ease-in-out w-10 h-10 text-slate-300 hover:w-11 hover:h-11'
          }
        >
          <IoIosArrowDown className={'w-full h-full'} />
        </a>
        <br />
      </span>
    </Section>
  )
}

export default Prologue
