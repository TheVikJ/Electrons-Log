import React from 'react'

function Section({ id, children, className }) {
  return (
    <section
      id={id ? id : ''}
      className={`min-h-screen flex flex-col w-full items-center ${
        className ? className : ''
      }`}
    >
      {children}
    </section>
  )
}

export default Section
