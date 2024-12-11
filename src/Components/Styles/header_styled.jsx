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
        /* TABLET */
  @media ${breakpoints.gb} {
    height: 33vh;
  }
  @media ${breakpoints.ipadAir5} {
    /* border: solid black 1px; */
    height: 19vh;
  }
  @media ${breakpoints.ipadMini} {
    height: 24vh;
  }
      /* SMARTHPHONE */
  @media ${breakpoints.md} {
    height: 41vh;
  }
 
`;

export const BoxOne = styled.div`
  /* border: solid 1px green; */
  ${Center}
  height: 3vh;
         /* TABLET */
  @media ${breakpoints.gb} {
    height: 11vh;
    width: 35%;
  }
  @media ${breakpoints.ipadAir5} {
    height: 20vh;
  }
        /* SMARTHPHONE */
  @media ${breakpoints.md} {
    height: 2vh;
  }
`;

export const P = styled.p`
  /* border: solid 1px red; */
  font-size: 0.9rem;
  font-weight: 600;
  position: relative;
  bottom: 1.3rem;
  /* TABLET */
  @media ${breakpoints.gb} {
    font-size: 1.2rem;
  }
  /* SMARTHPHONE */
  @media ${breakpoints.md}  {
    font-size: 1.2rem;
  }
`;

export const BoxTwo = styled.div`
  ${Center}
  img {
    width: 100%;
    /* TABLET */
    @media ${breakpoints.gb}{
      width: 150%;
    }
    /* SMARTHPHONE */
    @media ${breakpoints.md} {
      width: 350%;
    }
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
         /* TABLET */
  @media ${breakpoints.gb} {
    /* border: solid 1px black; */
    position: relative;
    width: 40%;
    right: 15rem;
    bottom: 2rem;
  }
  @media ${breakpoints.ipadAir5} {
    width: 35%;
  }
  @media ${breakpoints.ipadMini} {
    /* border: solid 1px blue; */
    height: 29vh;
    position: relative;
    right: 14rem;
    bottom: 3rem;
  }
  /* SMARTHPHONE */
  @media ${breakpoints.md} {
    width: 80%;
    position: relative;
    right: 1rem;
    bottom: 2rem;
    justify-content: center;
  }
`;

export const Fig = styled.figcaption`
  /* border: solid 1px blue;   */
  ${Center}
  width: 35%;
  height: 15%;
  img {
    width: 24%;
       /* SMARTHPHONE */
    @media ${breakpoints.md}{
      width: 15%;
    }
  }
  figcaption {
    font-family: "Archivo", sans-serif;
    font-size: 1rem;
    color: #ffff;
       /* SMARTHPHONE */
    @media ${breakpoints.md} {
      font-size: 1.2rem;
    }
  }
         /* TABLET */
  @media ${breakpoints.gb} {
    width: 55%;
  }
  @media ${breakpoints.ipadAir5} {
    width: 43%;
  }
      /* SMARTHPHONE */
  @media ${breakpoints.md}{
    width: 60%; 
  }
`;

export const BoxText = styled.div`
  /* border: solid 1px blue; */
  ${Center}
  height: 70%;
  flex-direction: column;
  align-items: first baseline;
  justify-content: space-between;
  /* TABLET */
  @media ${breakpoints.gb}{
    justify-content: space-around;
  }
  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffff;
         /* TABLET */
    @media ${breakpoints.gb}{
       font-size: 1.8rem;
    }
    @media ${breakpoints.ipadAir5}{
        font-size: 1.2rem;
    }
    @media ${breakpoints.ipadMini} {
        font-size: 1rem;
    }
        /* SMARTHPHONE */
    @media ${breakpoints.md} {
        font-size: 2rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: #ffff;
    position: relative;
    bottom: 4rem;
         /* TABLET */
    @media ${breakpoints.gb} {
      width: 91%;
      font-size: 0.9rem;
      position: relative;
      bottom: 2rem;
    }
    @media ${breakpoints.ipadAir5} {
      width: 100%;
      font-size: 0.7rem;
    }
  }

`;
