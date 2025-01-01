import styled, { css } from "styled-components";
import breakpoints from "./breakpoint";

export const Center = css `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MediaHeightMain = css`
    height: 241vh;
`;

export const WidthBoxTex = css`
    width: 91%;
`;

export const Main = styled.main`
    /* border: solid 4px purple; */
    height: 119vh;
    @media (max-width: 884px){
        height: 133vh;
    }
    @media (max-width: 440px) and (min-width: 430px){
        ${MediaHeightMain}
    }
    @media (max-width: 428px) and (min-width: 393px){
        ${MediaHeightMain}
    }
    @media (max-width: 390px) and (min-width: 360px){
        height: 245vh;
    }
`;

export const MainBox = styled.section`
    /* border: solid 1px red; */
    height: 100vh;
    ${Center}
    flex-direction: column;
    @media (max-width: 884px){
        height: 130vh;
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
        @media (max-width: 884px){
            width: 70%;
        }
        @media (max-width: 440px) and (min-width: 430px){
            ${WidthBoxTex}
        }
        @media (max-width: 428px) and (min-width: 360px){
            ${WidthBoxTex}
        }
    h1{
        font-size: 1.4rem;
        font-weight: 600;
        color: #121214;
        @media (max-width: 884px){
            font-size: 2.3rem;
        }
        @media (max-width: 440px) and (min-width: 393px){
            font-size: 1.8rem;
        }
        @media (max-width: 390px) and (min-width: 360px){
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
        @media (max-width: 884px){
            font-size: 1.4rem;
        }
        @media (max-width: 800px){
            font-size: 1.5rem;
        }
        @media (max-width: 428px) and (min-width: 393px){
           font-size: 1.2rem; 
        }
        @media (max-width: 390px) and (min-width: 360px){
            font-size: 1.1rem;
        }

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
    @media (max-width: 884px){
        gap: 2.3rem;
        height: 70%;
    }
`;