import React from 'react'
import * as S from '../Styles/main_styled'
import Card from '../Card/Card'

export default function Main() {
  return (
    <main>
      <S.MainBox>
        <S.BoxText>
            <h1>Os melhores em um só lugar</h1>
            <p>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
        </S.BoxText>
        <S.BoxCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </S.BoxCard>
      </S.MainBox>
    </main>
  )
}
