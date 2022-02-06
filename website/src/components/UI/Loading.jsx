import React from 'react'
import BoxLoading from 'react-loadingg/lib/BoxLoading'

function Loading({ style }) {
  return (
    <BoxLoading color={'#f1f5f9'} size={'large'} speed={0.8} style={style} />
  )
}

export default Loading
