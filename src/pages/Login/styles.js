import styled from 'styled-components';

import background from '../../assets/background.svg'

export const BackGround = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;

    background-size: cover ;
    background-image: url(${background});

    display: flex;
    justify-content: center;

`

export const Container = styled.div`
    height: 65vh;
    width: 28vw;


    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    
    background-color: #fff;
    border-radius: 5px;
    
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
    width:18vw;

    margin-top:1vw;
    margin-bottom:1vw;

    text-align: center;

    label {    
        font-weight: 600;
        font-size: 19px;

        color: #0d1128;
    }
    p{
        opacity: 0.6;
    }
`

