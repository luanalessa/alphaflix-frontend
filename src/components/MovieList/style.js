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
    font-size: 25px;
    line-height: 29px;
    text-align: left;

    color: white;

`
export const Cards = styled.div`
    width: 140px;
    height: 180px;

    margin-top: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    ~:nth-child(n){
        margin-left: 20px;
    }

    border: 1px solid white;
    border-radius: 10px;

    .movie-card { 
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .icon{
        width: 25px;
        height: 25px;

        opacity: 0.6;
    }

    .movie-info {
        width: 125px;
        
        position: absolute;
        color: black;

        align-self: flex-end;

        margin-right:3px;

        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;

        span {
            width: 80px;
            height:25px;
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 13px;
            
        }

    }

`