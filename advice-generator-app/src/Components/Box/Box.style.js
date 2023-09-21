import styled from "styled-components";

const media = {
    desktop: '@media screen and (min-width: 1025px)'
}

export const BoxContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 2rem 0;
    width: 325px;
    height: 355px;
    background-color: #313a49;
    border-radius: 20px;
    position: relative;

    ${media.desktop} {
        width: 560px;
        height: 340px;
        padding: 2rem .8rem;
    }    
`

export const HeaderOne = styled.h1`
    font-size: 12px;
    letter-spacing: 3px;
    color: hsl(150, 100%, 66%);
`

export const ParaAdvice = styled.p`
    margin: 10px;
    font-weight: 600;
    color: hsl(193, 38%, 86%);
`

export const ButtonContainer = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    bottom: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(150, 100%, 66%);
    cursor: pointer;
 

    &:hover{
        -webkit-box-shadow: 0px 0px 30px 4px rgba(0,255,128,1);
        -moz-box-shadow: 0px 0px 30px 4px rgba(0,255,128,1);
        box-shadow: 0px 0px 30px 4px rgba(0,255,128,1);
  } 
`



