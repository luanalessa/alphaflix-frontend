import React, {useContext} from 'react';
import Modal from 'react-modal';

import {RiMovie2Fill} from 'react-icons/ri'
import {IoIosTime, IoIosHappy} from 'react-icons/io'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {HiEmojiSad} from 'react-icons/hi'

import Button from '../ Button'

import * as S from './style'
import Favorite from '../../assets/favorite.svg'
import close from "../../assets/close.svg"

import { MovieContext } from '../../providers/MovieProvider';
import { CartContext } from '../../providers/CartProvider';


export default function MovieDescriptionModal(props) {
    const { movies, genres, selected, setFavorite } = useContext(MovieContext);
    const { addMovie } = useContext(CartContext);



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
                <img  alt="Movie Poster" src={selected?.poster}/>
            </figure>
            <caption>
                <h1>{selected?.title}</h1>
                <pre>
                    < BsFillBookmarkFill class="movie-icon"/> <label> {selected?.genre} </label>
                </pre>
                <pre>
                    < IoIosTime class="movie-icon"/> <label>{selected?.runtime} </label>
                </pre>
                <pre>
                    < RiMovie2Fill class="movie-icon"/> <label> {selected?.director} </label>
                </pre>
                <p>{selected?.description}</p>
                <div class="movie-btn">
                <Button className="type-green" onClick={() => addMovie(selected)}>Alugar</Button>
                <button class="liked-btn" onClick={()=> setFavorite(selected.title)}><IoIosHappy/></button>
                <button class="liked-btn"><HiEmojiSad/></button>
                </div>
            </caption>
        </S.Container>
    </Modal>
       )

}