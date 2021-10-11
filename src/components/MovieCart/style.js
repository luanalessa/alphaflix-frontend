import styled from "styled-components";

export const Container = styled.div`
    width: 920px;
    min-height: 20vh;
    
    margin: 3vw auto;
    display: flex;
    justify-content: right;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 10px;

   & section:last-child{
        margin-top: 10px;
    }

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

export const Box =  styled.div`
    width: 920px;
    height: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #ffffff0d;
    border-radius: 5px;
    margin-top: 20px;
    padding: 0 50px;


    img{
        width: 120px;
        height: 160px;
        border-radius: 5px;


    }
    section {
            width: 260px;
            height:25px;
            margin-left:40px;

    
        & p.movie-title{
            font-weight: 600;
            font-size: 18px;
            color: white;
        }
           
        & p.movie-info{
            font-weight: 600;
            font-size: 14px;
            color: #6e8088;
        }
    }

    & .trash{
        width: 70px;
        height:25px;
        color: #6e8088;
        font-size: 28px;
        text-align: right;

        cursor: pointer;

        &:hover{
            color: white;
        }
    }



`