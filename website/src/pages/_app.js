import '../styles/globals.css'

import ProtectedPage from '../components/auth/ProtectedPage'
import AnonymousPage from '../components/auth/AnonymousPage'
import Head from 'next/head'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  const isProtected = Component.isProtected
  const isAnonymous = Component.isAnonymous

  if (isProtected && isAnonymous) {
    throw new Error(
      `The component ${Component.name} is anonymous and protected as the same time. Please choose either one`
    )
  }

  return (
    <Fragment>
      {isProtected ? (
        <ProtectedPage>
          <Component {...pageProps} />
        </ProtectedPage>
      ) : isAnonymous ? (
        <AnonymousPage>
          <Component {...pageProps} />
        </AnonymousPage>
      ) : (
        <Component {...pageProps} />
      )}
    </Fragment>
  )
}

// Add just so IDE doesn't complain :)
MyApp.isProtected = false
MyApp.isAnonymous = false

export default MyApp
