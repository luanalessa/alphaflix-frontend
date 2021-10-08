import styled from 'styled-components';

import logo from '../../assets/logo.svg'
import alert from '../../assets/alert.svg'


export const Bar = styled.div`
    width: 100%;
    height: 13vh;
   
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
  
    background: #0D1026;

`

export const Logo = styled.div`
    width: 3.3vw;
    height: 7vh;

    margin: auto;
    background-image: url(${logo});
    background-size: cover;
`

export const Menu = styled.ul`
    width: 45vw;
    height: 4vh;

    display: flex;
    align-items: center;
    margin: auto 20vw auto 0;

    color: #B6B6B6;
    opacity: 0.6;
    font-weight: 600;
    list-style-type: none;

    li {
        width: 7vw;
        margin: 0 2vw 0 2vw;
        text-align: center;

        &.clicked{
            color: #FFFFFF;
        }

        
    }

`

export const Alert = styled.div`
    width: 2vw;
    height: 4vh;

    margin: auto;

    background-image: url(${alert});
    background-size: cover;
`

export const User = styled.div`
    width: 3.5vw;
    height: 3.5vw;

    margin: auto;
    background: #FFFFFF;
    border-radius: 50%;

`