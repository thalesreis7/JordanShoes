import styled, { css } from "styled-components"
import breakpoints from "./breakpoint";

export const Center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`; 

export const Header = styled.header`
    border: solid 1px blue;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    height:50vh;
    @media ${breakpoints.gb} {
        height: 22vh;
    }
    
`;

export const BoxOne = styled.div`
    /* border: solid 1px green; */
    ${Center}  
    height: 3vh;
    @media ${breakpoints.gb}{
        height:18vh;
    }
`;

export const P = styled.p`
    /* border: solid 1px red; */
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    bottom: 2rem;
    
`

export const BoxTwo = styled.div`
    ${Center}
    img{
     width: 100%
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
    height: 30vh;
    position: relative;
    right: 20rem;
    @media ${breakpoints.gb} {
        /* border: solid 1px black; */
        position:relative;
        width: 40%;
        right: 15rem;
        bottom: 2rem;
    }
`;

export const Fig = styled.figcaption`
   /* border: solid 1px blue;   */
   ${Center}
   width: 35%;
   height: 15%;
   img{
        width: 24%;
   }
   figcaption{
        font-family: 'Archivo', sans-serif;
        font-size: 1rem;
        color: #ffff;
   }
   @media ${breakpoints.gb} {
        width: 33%;

   }
`;

export const BoxText = styled.div`
    /* border: solid 1px blue; */
    ${Center}
    height: 70%;
    flex-direction: column;
    align-items: first baseline;
    justify-content: space-between;
    h1{
        font-size: 1.4rem;
        font-weight: 600;
        color: #ffff;
    }
    p{
        font-size: 1.1rem;
        font-weight: 400;
        color: #ffff;
        position: relative;
        bottom: 4rem;
        
        @media ${breakpoints.gb} {
            width: 84%;
            font-size: 0.8rem;
            position: relative;
            bottom: 2rem;
        }
    }

    @media ${breakpoints.gb} {
        /* width: 84%; */
    }
`;