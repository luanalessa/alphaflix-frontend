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
    height: 60vh;
    width: 25vw;

    margin: auto;
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    
    background: rgb(2 6 16 / 75%);
    border-radius: 5px;

    

`

