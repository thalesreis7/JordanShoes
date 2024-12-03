import styled, { css } from "styled-components";

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
    /* border: solid 2px black; */
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
`;

export const BoxCopy = styled.div`
    /* border: solid 1px orange; */
    width: 20%;
    height: 26%;
    ${Center}
    ${FooterFont}
`;



