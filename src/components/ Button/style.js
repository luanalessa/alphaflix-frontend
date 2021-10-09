import styled from "styled-components";

export const ButtonComponent = styled.button`
    width: 268px;
    height: 40px;

    margin: 10px 0 5px 0;
    text-align: center;

    box-shadow: 0px 4px 4px rgba(11, 23, 16, 0.09);
    border-radius: 5px;

    font-weight: bold;


    &.type-green {
        background: #53b04b;
        color: #FFFFFF;
    }

    &.type-white {
        background: #FFFFFF;
        border-color: #297559;
        color: #53b04b;
    }
`;