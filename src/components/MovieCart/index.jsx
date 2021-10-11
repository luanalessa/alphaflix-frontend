import React, {useContext} from 'react';
import { CartContext } from '../../providers/CartProvider';
import { MovieContext } from '../../providers/MovieProvider';
import { FaTrash } from 'react-icons/fa'

import Button from '../ Button'

import { useState } from 'react';


import * as S from './style'


export default function MovieCart(props) {
    const { movies } = useContext(MovieContext);
    const { cart, delMovie } = useContext(CartContext);


    return (
        <S.Container>
           <S.Title>Meu carrinho</S.Title>
           { cart ? cart.map(movie =>            
           <S.Box>
                    <img src={movie.poster} alt=""/>
                    <section>
                        <p className="movie-title">{movie.name}</p>
                        <p className="movie-info">{movie.director}</p>
                        <p className="movie-info">{movie.runtime}</p>
                    </section>
                    <section className="trash" onClick={()=> delMovie(movie.name) }>
                        <FaTrash/>
                    </section>
           </S.Box>) : null}
            
            <section>
                <Button className="type-green" >Confirmar</Button>
            </section>
        </S.Container>)

}