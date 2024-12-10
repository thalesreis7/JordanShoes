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
        /* TABLET */
    @media ${breakpoints.gb} {
        height: 170vh;
    }
`;

export const MainBox = styled.section`
    /* border: solid 1px red; */
    height: 100vh;
    ${Center}
    flex-direction: column;
            /* TABLET */
    @media ${breakpoints.gb} {
        height: 100%;
        justify-content: space-evenly;
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
            /* TABLET */
    @media ${breakpoints.gb} {
        width: 83%;
        height: 12%;
    }
    h1{
        font-size: 1.4rem;
        font-weight: 600;
        color: #121214;
        @media ${breakpoints.gb} {
            font-size: 2rem;
        }
    }
    p{
        /* border: solid 1px; */
        width: 80%;
        font-size: 1rem;
        font-weight: 400;
        color: #121214;
        text-align: center;
                /* TABLET */
        @media ${breakpoints.gb} {
            font-size: 1.4rem;
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
            /* TABLET */
    @media ${breakpoints.gb} {
        width: 97%;
        gap: 2rem;
    }
`;