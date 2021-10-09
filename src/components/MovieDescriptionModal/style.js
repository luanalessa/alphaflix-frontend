import styled from "styled-components";
import background from "../../assets/background.svg"

export const ModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#00000099',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      width: '950px',
      height: '550px',
      position: 'absolute',
      top: '7vw',
      border: 'none',
      backgroundColor: '#021822',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      padding: '20px'
    },

  }

export const Container = styled.div`
   
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;

    .react-modal-close{
      width: 36px;
      
    }

    section{
      width: 600px;
      margin-bottom: 20px;
    }
    figure{
      width: 330px;
      height: 410px;
      background: #1c4758;

      border-radius: 10px;
      margin-left: 50px;
    }
    caption{
      width: 420px;
      height: 430px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-right: 50px;
      text-align: justify;

      pre{
        height: 20px;
        color: white;
        margin: 0 5px;

        label{
          font-size: 18px;
        }
      }
      .movie-icon{
        color: #53b04b;
        font-size: 18px;
      }

      h1{
        width: 420px;
        color: white;
        text-align: center;
        margin-bottom: 20px;
      }
      p{
        color: #ffffff8c;
      }
    }

    .movie-btn{
      width:420px;

      display: flex;
      justify-content: space-between;
    }
    .liked-btn{
      width: 40px;
      height: 40px;

      margin-top: 5px;

      border-radius: 50%;
      border: solid 3px #1c475880;

      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;
      color: #1c475880;
      font-size: 24px;
      
      margin-left: 10px;

    }

    .liked-btn:hover{
      border-color: solid 2px white;
      color: white;
    }

`
