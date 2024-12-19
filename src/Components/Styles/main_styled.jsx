import styled, { css } from "styled-components";
import breakpoints from "./breakpoint";

export const Center = css `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.main`
    /* border: solid 3px purple; */
    height: 119vh;
    /* MOBILE */
    @media ${breakpoints.Mxl} {
        width: 135vw;
        height: 338vh;
    }
    @media (max-width: 430px) and (min-width: 393px) {
        width: 94vw;
    }
    @media (min-width: 412px) and (max-width: 428px) {
        width: 101vw;
        height: 340vh;
    }
`;

export const MainBox = styled.section`
    /* border: solid 1px red; */
    height: 100vh;
    ${Center}
    flex-direction: column;
    /* TABLETS */
    @media ${breakpoints.XL} {
     height: 117vh;
    }
`;

export const BoxText = styled.div`
    /* border: solid 1px green; */
    width: 40%;
    height: 18%;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    /* TABLETS */
    @media ${breakpoints.XL}{
        width: 87%;
    }
    /* MOBILE */
    @media (max-width: 430px) and (min-width: 393px){
        width: 97%;
    }
    h1{
        font-size: 1.4rem;
        font-weight: 600;
        color: #121214;
      /* TABLETS */
      @media ${breakpoints.XL}{
        font-size: 2rem;
        position: relative;
        top: 2rem;
      }
      /* MOBILE */
      @media ${breakpoints.Mxl}{
        position: relative;
        top: 1rem;
      }
      @media (max-width: 430px) and (min-width: 393px) {
        font-size: 1.4rem;
      }
      @media (min-width: 412px) and (max-width: 428px) {
        font-size: 1.5rem;
      }
    }
    p{
        /* border: solid 1px; */
        width: 80%;
        font-size: 1rem;
        font-weight: 400;
        color: #121214;
        text-align: center;
        /* TABLETS */
        @media ${breakpoints.XL}{
            font-size: 1.5rem;
        }
        @media ${breakpoints.MD} {
            font-size: 1.3rem;
        }
        /* MOBILE */
        /* @media (max-width: 430px) and (min-width: 393px) {
            font-size: 1.4rem;
        } */
    }
`;

export const BoxCard = styled.section`
    /* border: solid 2px orange; */
    ${Center}
    justify-content: space-around;
    flex-wrap:wrap;
    gap:0.1rem;
    width: 84%;
    height: 81%;
    /* TABLETS */
    @media ${breakpoints.XL}{
        width: 90%;
        flex-wrap: wrap;
        gap: 2.5rem;
    }
    /* MOBILE */
    @media ${breakpoints.Mxl}{
        gap: 2.7rem;
    }
`;