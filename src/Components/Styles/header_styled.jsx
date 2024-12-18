import styled, { css } from "styled-components";
import breakpoints from "./breakpoint";

export const Center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  /* border: solid 1px blue; */
  ${Center}
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh; 
  /* TABLETS */
  @media ${breakpoints.XL}{
    height: 21vh;
  }
`;

export const BoxOne = styled.div`
  /* border: solid 1px green; */
  ${Center}
  height: 3vh;
  /* TABLETS */
  @media ${breakpoints.XL}{
    height: 12vh;
  }
`;

export const P = styled.p`
  /* border: solid 1px red; */
  font-size: 0.9rem;
  font-weight: 600;
  position: relative;
  bottom: 1.3rem;
`;

export const BoxTwo = styled.div`
  ${Center}
  img {
    width: 100%;
  }
  position: absolute;
`;

export const BoxThree = styled.div`
  /* border: solid 1px black; */
  ${Center}
  flex-direction: column;
  align-items: first baseline;
  justify-content: space-between;
  width: 30vw;
  height: 35vh;
  position: relative;
  right: 20rem;
  /* TABLETS */
  @media ${breakpoints.XL} {
    right: 11rem;
    bottom: 1rem;
    width: 50%;
  }
`;

export const Fig = styled.figcaption`
  /* border: solid 1px blue;   */
  ${Center}
  width: 35%;
  height: 15%;
  /* TABLETS */
  @media ${breakpoints.XL} {
    width: 39%;
  }
  img {
    width: 24%;
  /* TABLETS */
  @media ${breakpoints.XL}{
    width: 32%;
  }
  }
  figcaption {
    font-family: "Archivo", sans-serif;
    font-size: 1rem;
    color: #ffff;
    /* TABLETS */
    @media ${breakpoints.XL}{
      font-size: 1.4rem;
    }
  }  
`;

export const BoxText = styled.div`
  /* border: solid 1px blue; */
  ${Center}
  height: 70%;
  flex-direction: column;
  align-items: first baseline;
  justify-content: space-between;
  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffff;
    /* TABLETS */
    @media ${breakpoints.XL}{
      font-size: 1.8rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: #ffff;
    position: relative;
    bottom: 4rem;
    /* TABLETS */
    @media ${breakpoints.XL}{
      font-size: 1.2rem;
      bottom: 2rem;
    }
  }
`;
