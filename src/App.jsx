import React from 'react'
import Header from './Components/Header/Header'
import { GlobalStyle } from './Components/GlobalStyled/Global_styled'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <GlobalStyle/>
    </>
  )
}
