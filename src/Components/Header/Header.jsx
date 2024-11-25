import React from 'react'
import * as S from '../Styles/header_styled'
import background from '../../assets/img/image-michael-jordan.svg'
import icon from '../../assets/Icon/logo-jordan.svg'
export default function Header() {
  return (
    <S.Header>
         <S.BoxOne>
              <S.P>Frete grátis para todo o Brasil!</S.P>
         </S.BoxOne>
            <S.BoxTwo>
              <img src={background} alt="Imagem do Michael Jordan" />
            </S.BoxTwo>
              <S.BoxThree>
                <S.Fig>
                    <img src={icon} alt="Imagem do logotipo da marca Jordan" />
                    <figcaption>JordanShoes</figcaption>
                </S.Fig>
                <S.BoxText>
                    <h1>A melhor loja de Jordan do país</h1>
                    <p>O tênis Jordan é fruto de uma velha e forte pareceria entre a Nike e o jogador Michael Jordan.</p>
                </S.BoxText>
              </S.BoxThree>
    </S.Header>
  )
}
