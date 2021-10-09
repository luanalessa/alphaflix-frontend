import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import {RiMovie2Fill} from 'react-icons/ri'
import {IoIosTime, IoIosHappy} from 'react-icons/io'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {HiEmojiSad} from 'react-icons/hi'

import Button from '../ Button'

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
        <S.Container>
        <section> <button type="button">
                <img
                    src={close}
                    alt="Fechar Modal"
                    onClick={props.onRequestClose}
                    className="react-modal-close"
                />
            </button>
            </section>
       
            <figure>
                {/* <img  alt="Movie Poster" src=""/> */}
            </figure>
            <caption>
                <h1>Nome do filme aqui</h1>
                <pre>
                    < BsFillBookmarkFill class="movie-icon"/> <label> Ação </label>
                </pre>
                <pre>
                    < IoIosTime class="movie-icon"/> <label> 92 min </label>
                </pre>
                <pre>
                    < RiMovie2Fill class="movie-icon"/> <label> Luana Lessa </label>
                </pre>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum sed lacus non vehicula. Mauris fringilla maximus mauris et ornare. Maecenas in cursus nunc. Nunc lacinia erat vitae augue finibus, ac maximus leo commodo. Etiam quis sagittis neque. Donec sapien nulla, maximus vel rhoncus id, dictum nec elit. Sed quis mollis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus."</p>
                <div class="movie-btn">
                <Button className="type-green" >Alugar</Button>
                <button class="liked-btn"><IoIosHappy/></button>
                <button class="liked-btn"><HiEmojiSad/></button>
                </div>
            </caption>
        </S.Container>
    </Modal>
       )

}