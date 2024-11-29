import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
    border: solid 2px black;
    background-color: #111111;
    height: 15vh;
    ${Center}
`;

export const BoxFooter = styled.div`
    border: solid 1px orange;
    height: 30%;
    width: 100%;
    ${Center}
`;

