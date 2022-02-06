import React from 'react'

export const SecondaryButton = ({ className, onClick, children }) => {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`my-2 block px-6 py-3 text-sm transition-colors duration-300 rounded rounded-full shadow-md text-slate-900 font-medium bg-slate-100 hover:bg-slate-200 shadow-slate-100/30 ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  )
}

export const PrimaryButton = ({ className, onClick, children }) => {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`my-2 block px-6 py-3 text-sm transition-colors duration-300 rounded rounded-full shadow-md text-slate-100 font-medium bg-slate-900 hover:bg-slate-800 shadow-slate-800/30 ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  )
}
