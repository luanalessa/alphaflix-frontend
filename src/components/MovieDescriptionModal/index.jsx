import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';


import * as S from './style'
import Favorite from '../../assets/favorite.svg'
import close from "../../assets/close.svg"


export default function MovieDescriptionModal(props) {
    console.log(props.movies)

    return ( 
    <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        style={S.ModalStyle}
    >
        <button type="button">
                <img
                    src={close}
                    alt="Fechar Modal"
                    onClick={props.onRequestClose}
                    className="react-modal-close"
                />
            </button>

            <img  alt="Movie Poster"/>

    </Modal>
       )

}