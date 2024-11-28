import React from 'react'
import * as S from '../Styles/card_styled'

export default function Card(props) {
  return (
    <S.Card>
      <S.BoxFigure>
        <img src={props.image} alt="" />
      </S.BoxFigure>
      <S.BoxText>
          <S.Category>{props.category}</S.Category>
          <S.Name>{props.name}</S.Name>
          <S.Preco>R${props.preco}</S.Preco>
      </S.BoxText>
    </S.Card>
  )
}
