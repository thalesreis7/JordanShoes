import styled, { css } from "styled-components";
import breakpoints from "./breakpoint";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterFont = css `
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    color: #FFF;
`;

export const Footer = styled.footer`
    /* border: solid 2px blue; */
    background-color: #111111;
    height: 10vh;
    ${Center}
    justify-content: space-around;
    @media (max-width: 440px) and (min-width: 320px){
        height: 20vh;
    }
`;

export const BoxFooter = styled.div`
    /* border: solid 1px orange; */
    height: 26%;
    width: 42%;
    ${Center}
    justify-content: space-between;
    ${FooterFont}
    @media (max-width: 884px){
        width: 52%;
        font-size: 0.9rem;
    }
    @media (max-width: 800px){
        width: 65%;
        font-size: 1rem;        
    }
    @media (max-width: 440px) and (min-width: 393px){
        flex-direction: column;
        width: 40%;
        height: 60%;
        font-size: 1rem;
    }
    @media (max-width: 390px) and (min-width: 360px){
        flex-direction: column;
        width: 47%;
        height: 60%;
        font-size: 1rem;
    }
    @media (max-width: 320px){
        flex-direction: column;
        width: 56%;
        height: 69%;   
    }
`;

export const BoxCopy = styled.div`
    /* border: solid 1px orange; */
    width: 20%;
    height: 26%;
    ${Center}
    ${FooterFont}
    @media (max-width: 884px){
        width: 27%;
        font-size: 1.1rem;
    }
    @media (max-width: 800px){
        font-size: 1.2rem;        
    }
    @media (max-width: 440px) and (min-width: 360px){
        width: 50%;
    }
    @media (max-width: 320px){
        width: 50%;
        height: 50%;
        font-size: 1rem;
        text-align: center;
    }
`;



