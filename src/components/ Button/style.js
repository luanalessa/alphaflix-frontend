import styled from "styled-components";

export const ButtonComponent = styled.button`

    width: 19.6vw;
    height: 6vh;

    margin: 10px 0 10px 0;
    text-align: center;

    box-shadow: 0px 4px 4px rgba(11, 23, 16, 0.09);
    border-radius: 3px;

    
    &.type-green {
        background: #1CA171;
        color: #FFFFFF;
    }

    &.type-white {
        background: #FFFFFF;
        border-color: #297559;
        color: #1CA171;
    }
`;