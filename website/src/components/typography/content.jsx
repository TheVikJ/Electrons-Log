import React from 'react'

function Content({ children, className }) {
  return (
    <p
      className={`text-lg md:text-xl text-slate-100 max-w-sm sm:max-w-md md:max-w-3xl ${className}`}
    >
      {children}
    </p>
  )
}

export default Content
