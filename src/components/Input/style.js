import styled from "styled-components";

export const InputComponent = styled.input`
    width: 250px;
    height: 40px;
    border: 3px red;

    margin: 10px 0 10px 0;

    background: #1c4758;
    border: none;
    border-radius: 5px;

    &::placeholder{
        color:white;
        opacity:0.6;
    }

    ~input{
        margin-bottom: 30px;
    }

    &.error{
        border: 3px solid red;
    }

`;