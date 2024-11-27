import React from 'react'
import * as S from '../Styles/card_styled'

export default function Card(props) {
  return (
    <S.Card>
      <figure>
        <img src={props.image} alt="" />
        <figcaption></figcaption>
      </figure>
      <p>{props.category}</p>
      <p>{props.name}</p>
    </S.Card>
  )
}
