import styled from "styled-components";

export const InputComponent = styled.input`
    width: 18vw;
    height: 6vh;
    border: 3px red;

    margin: 10px 0 10px 0;

    background: #FFFFFF;
    border: 3px solid #E7E7E7;
    border-radius: 3px;
/* 
    ~input{
        margin-bottom: 30px;
    } */

    &.error{
        border: 3px solid red;
    }

`;