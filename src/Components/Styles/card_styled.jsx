import styled, { css } from "styled-components";

export const  Center = css`
  display: flex;
  justify-content: center;
  align-items: center;  
`;

export const Card = styled.div`
  /* border: solid 1px blue; */
  width: 30%;
  height: 47%;
  ${Center}
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 884px){
    height: 33%;
    width: 47%;
  }
  @media (max-width: 440px) and (min-width: 320px){
    width: 91%;
  }
`;

export const BoxFigure = styled.figure`
  /* border: solid 1px red; */
  width: 96%;
  height: 67%;
  background-color: #F3F7FF;
  ${Center}
  &:hover{
    background-color: #cadafa;
  }
  img{
    width:60%;
    &:hover{
    transition: 300ms linear;
    transform: rotate(-30deg) translateZ(0) scale(1.3);
    }
    cursor: pointer;
  }
`;
 
export const BoxText = styled.div`
  /* border: solid 1px green; */
  ${Center}
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 96%;
  height: 26%;
`;

export const Category = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  @media (max-width: 884px){
    font-size: 1.1rem;
  }
  @media (max-width: 800px){
    font-size: 1.2rem;          
  }
`;

export const Name = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: #b8c8e9;
  @media (max-width: 884px){
    font-size: 1rem;
  }
`;

export const Preco = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  @media (max-width: 884px){
    font-size: 1.3rem;
    font-weight: bold;
  }
  @media (max-width: 800px){
    font-size: 1.4rem;
  }
`;