import styled from "styled-components";

export const Container = styled.div`
    width: 920px;
    min-height: 20vh;
    
    margin: 3vw auto;
    display: flex;
    justify-content: left;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 10px;

`
export const Box =  styled.div`
    width: 920px;
    display: flex;
    justify-content: space-around;
    align-content: center;

`
export const Title = styled.div`
    width: 920px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: left;

    display: flex;
    align-items: center;
    color: white;

    margin-bottom: 10px;

    .left-icon{
        font-size: 20px;
        margin-left: 10px;
    }

`
export const Cards = styled.div`
    width: 190px;
    height: 260px;

    margin-top: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content:flex-end;

    cursor: pointer;

    ~:nth-child(n){
        margin-left: 20px;
    }

    border: 0;

    .movie-card { 
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

 
    .icon{
        width: 30px;
        height: 30px;

        margin-bottom: 5px;
        color: white;
        opacity: 0.3;
    }
    .icon:hover{
        color: #53b04b;
    }

    .movie-info {
        width: 50px;
        
        position: absolute;
        color: black;

        align-self: flex-end;

     


        /* span {
            width: 80px;
            height:25px;
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 13px;
            
        } */

    }

`