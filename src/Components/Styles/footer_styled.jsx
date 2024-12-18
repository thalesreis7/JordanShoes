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
`;

export const BoxFooter = styled.div`
    /* border: solid 1px orange; */
    height: 26%;
    width: 42%;
    ${Center}
    /* flex-direction: column; */
    justify-content: space-between;
    ${FooterFont}
    /* TABLETS */
    @media ${breakpoints.XL}{
        width: 58%;
        font-size: 1rem;
    }
`;

export const BoxCopy = styled.div`
    /* border: solid 1px orange; */
    width: 20%;
    height: 26%;
    ${Center}
    ${FooterFont}
    /* TABLET */
    @media ${breakpoints.XL}{
        width: 33%;
        font-size: 1rem;
    }
    @media ${breakpoints.SM} {
        width: 38%;
    }
   
`;



