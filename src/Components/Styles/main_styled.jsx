import styled, { css } from "styled-components";

export const Center = css `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainBox = styled.section`
    border: solid 1px red;
    height: 100vh;
    ${Center}
    flex-direction: column;
`;

export const BoxText = styled.div`
    /* border: solid 1px green; */
    width: 40%;
    height: 18%;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    h1{
        font-size: 1.4rem;
        font-weight: 600;
        color: #121214;
    }
    p{
        /* border: solid 1px; */
        width: 80%;
        font-size: 1rem;
        font-weight: 400;
        color: #121214;
        text-align: center;
    }
`;

