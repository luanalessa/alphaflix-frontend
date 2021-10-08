import styled from "styled-components";
import background from "../../assets/background.svg"

export const ModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#00000099'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: 'none',
      backgroundImage: `url(${background})`,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      padding: '20px'
    }
  }

export const Container = styled.div`
    width: 400px;
    height: 300px;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin: 0 auto;
    position: absolute;

    background: white;

`
