import React from 'react'
import Header from './Components/Header/Header'
import { GlobalStyle } from './Components/GlobalStyled/Global_styled'
import Main from './Components/Main/Main'

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
      <GlobalStyle/>
    </>
  )
}
