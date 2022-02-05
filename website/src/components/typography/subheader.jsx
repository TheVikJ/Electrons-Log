import React from 'react'

function Subheader({ children, className }) {
  return (
    <h2
      className={`font-medium text-xl md:text-2xl text-slate-100 text-center pt-14 ${className}`}
    >
      {children}
    </h2>
  )
}

export default Subheader
