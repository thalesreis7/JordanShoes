import React from 'react'
import * as S from '../Styles/main_styled'
import Card from '../Card/Card'
import jordan_green from "../../assets/img/jordan_green.svg"
import jordan_purple from "../../assets/img/jordan_purple.svg"
import jordan_grey from "../../assets/img/jordan_grey.svg"
import jordan_black from "../../assets/img/jordan_black.svg"
import jordan_smoke from "../../assets/img/jordan_smoke.svg"
import jordan_citrus from "../../assets/img/jordan_citrus.svg"

export default function Main() {
  return (
    <S.Main>
      <S.MainBox>
        <S.BoxText>
            <h1>Os melhores em um só lugar</h1>
            <p>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
        </S.BoxText>
        <S.BoxCard>
            <Card image={jordan_green} category={"Air Jordan 1 Mid Dutch Green"} name={"Tênis Air Jordan"} 
            preco={"1.199,99"}/>
            <Card image={jordan_black} category={"Air Jordan 1 High Zoom CMFT Tropical Twist"} name={"Tênis Air Jordan"} preco={"1.049,00"}/>
            <Card image={jordan_purple} category={"Air Jordan 1 High Court Purple White"} name={"Tênis Air Jordan"} 
            preco={"1.999,99"}/>
            <Card image={jordan_smoke} category={'Air Jordan 1 Mid GS "Light Smoke Grey"'} name={"Tênis Air Jordan"} preco={"1.585,00"}/>
            <Card image={jordan_citrus} category={"Air Jordan 1 Mid SE Bright Citrus"} name={"Tênis Air Jordan"}
            preco={"949,00"}
            />
            <Card image={jordan_grey} category={"Air Jordan 1 Mid Grey Camo"} name={"Tênis Air Jordan"} 
            preco={"999,00"}/>
        </S.BoxCard>
      </S.MainBox>
    </S.Main>
  )
}
