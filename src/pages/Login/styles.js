import styled from 'styled-components';

import background from '../../assets/background.svg'

export const BackGround = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;

    background: #023044;
    /* background-size: cover ; */
    /* background-image: url(${background}); */

    display: flex;
    justify-content: center;

`

export const Container = styled.div`
    height: 70vh;
    width: 28vw;


    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    
    background-color: #ffffff0d;
    border-radius: 5px;
    
    #logo-login{
        margin-top: 1vw;
        
    }
    form{

        width: 25vw;
        height:45vh;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content:center;

        button:first-of-type{

        }
    }
    .error{
        width:16vw;
        height: 2vh;
        margin-bottom: 10px;
        color: red;
        font-size: 15px;
        text-align:left;
    }

`

export const Title = styled.div`
    width:30vw;

    margin-top:1vw;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    label {    
        font-weight: 600;
        font-size: 18px;

        color: white;
    }
    p{
        width:17vw;
        margin-top:0.3vw;
        color: white;
        opacity: 0.4;
    }
`

