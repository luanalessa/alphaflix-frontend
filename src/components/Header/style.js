import styled from 'styled-components';

import logo from '../../assets/logo.svg'
import alert from '../../assets/alert.svg'


export const Bar = styled.div`
    width: 100%;
    height: 13vh;
   
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  
    background: #023044;

`

export const Logo = styled.div`
    width: 40px;
    height: 40px;

    margin: auto;
    background-image: url(${logo});
    background-size: cover;
`

export const Menu = styled.ul`
    width: 800px;
    height: 50px;

    display: flex;
    align-items: center;
    color: #B6B6B6;
    opacity: 0.6;
    font-weight: 600;
    list-style-type: none;

    li {
        height: 30px;
        margin: 0 3vw 0 3vw;
        padding: 15px;
        text-align: center;
        cursor: pointer;

        display: flex;
        flex-wrap: wrap;
        align-content: center;

        border-radius: 20px;
        &.clicked{
            color: #FFFFFF;
        }

        &:hover{
            background: #1c4758;
        }
        
    }

`

export const Cart = styled.div`
    width: 2vw;
    height: 4vh;

    margin: auto;
    color: #B6B6B6;
    opacity: 0.6;
    font-size: 25px;

    cursor: pointer;

    &.clicked{
        color: #FFFFFF;
    }

    /* background-image: url(${alert});
    background-size: cover; */
`

export const User = styled.div`
    width: 3.5vw;
    height: 3.5vw;

    margin: auto;
    background: #FFFFFF;
    border-radius: 50%;

`