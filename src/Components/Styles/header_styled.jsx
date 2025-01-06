import styled, { css } from "styled-components";

export const Center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MediaHeigth = css`
  height: 18vh;
`
export const MediaQueries1 = css`
  left: 0.3rem;
  width: 95%;
`

export const Header = styled.header`
  /* border: solid 1px blue; */
  ${Center}
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
  /* TABLETS */
  @media (max-width: 884px){
    height: 22vh;
  }
  @media (max-width: 800px){
    height: 30vh;
  }
  @media (max-width: 440px) and (min-width: 430px){
    ${MediaHeigth}
  }
  @media (max-width: 428px) and (min-width: 360px){
    ${MediaHeigth}
  }
  @media (max-width: 320px){
    height: 30vh;
  }
`;

export const BoxOne = styled.div`
  /* border: solid 1px green; */
  ${Center}
  height: 3vh;
`;

export const P = styled.p`
  /* border: solid 1px red; */
  font-size: 0.9rem;
  font-weight: 600;
  position: relative;
  bottom: 1.3rem;
  /* TABLETS */
  @media (max-width: 884px){
    bottom: 0.4rem;
    font-size: 1.2rem;
  }
  @media (max-width: 800px){
    font-size: 2rem;
  }
  @media (max-width: 768px){
   bottom: 0.2rem; 
  }
  @media (max-width: 440px) and (min-width: 430px){
    font-size: 1.2rem;
  }
  @media (max-width: 428px) and (min-width: 320px){
    font-size: 1.2rem;
  }
`;

export const BoxTwo = styled.div`
  ${Center}
  img {
    width: 100%;
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
  /* TABLETS */
  @media (max-width: 884px){
    right: 9rem;
    width: 49%;
    height: 80%;
  }
  @media (max-width: 800px){
    height: 70%;
    bottom: 0.8rem;
  }
  @media (max-width: 440px) and (min-width: 430px){
    ${MediaQueries1}
  }
  @media (max-width: 428px) and (min-width: 320px){
    ${MediaQueries1}
  }
`;

export const Fig = styled.figcaption`
  /* border: solid 1px blue;  */
  ${Center}
  width: 35%;
  height: 15%;
  /* TABLETS */
  @media (max-width: 884px) {
    width: 50%;
  }
  @media (max-width: 800px){
    width: 60%;
  }
  @media (max-width: 768px){
   position: relative;
   top: 1.2rem; 
  }
  @media (max-width: 440px) and (min-width: 430px){
    width: 43%;
    position: relative;
    top: 0.7rem;     
  }
  @media (max-width: 428px) and (min-width: 360px){
    width: 30%;
    position: relative;
    top: 15%;
    left: 2%;
  }
  @media (max-width: 320px){
    width: 10%;
    left: 20%;
  }
  figcaption {
    font-family: "Archivo", sans-serif;
    font-size: 1rem;
    color: #ffff;
    /* TABLETS */
    @media (max-width: 884px){
      font-size: 2rem;
    }
    @media (max-width: 440px) and (min-width: 430px){
      font-size: 1.2rem;
    }
    @media (max-width: 428px) and (min-width: 320px){
      font-size: 1.3rem;
    }
  }  
`;

export const BoxText = styled.div`
  /* border: solid 1px blue; */
  ${Center}
  height: 70%;
  flex-direction: column;
  align-items: first baseline;
  justify-content: space-between;
  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffff;
    /* TABLETS */
    @media (max-width: 884px){
       font-size: 2rem;
    }
    @media (max-width: 440px) and (min-width: 430px){
      font-size: 1.5rem;    
    }
    @media (max-width: 428px) and (min-width: 360px){
      font-size: 1.4rem;
    }
    @media (max-width: 320px){
      font-size: 1rem;
      position: relative;
      top: 0.6rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: #ffff;
    position: relative;
    bottom: 4rem;
    /* TABLETS */
    @media (max-width: 884px) {
      font-size: 1.3rem;
      bottom: 1.8rem;
    }
    @media (max-width: 768px){
      bottom: 2.5rem;
    }
    @media (max-width: 440px) and (min-width: 430px){
      font-size: 1.1rem;
      bottom: 1.2rem;    
    }
    @media (max-width: 428px) and (min-width: 360px){
      font-size: 1.1rem;
      bottom: 1rem;
    }
    @media (max-width: 320px){
      font-size: 0.8rem;
      bottom: 0.7rem;
    }
  }
`;
