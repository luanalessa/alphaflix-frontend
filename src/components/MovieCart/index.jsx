import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { CartContext } from '../../providers/CartProvider';
import { MovieContext } from '../../providers/MovieProvider';
import { FaTrash } from 'react-icons/fa'

import api from '../../services/api.js'

import Button from '../ Button'

import { useState } from 'react';


import * as S from './style'


export default function MovieCart(props) {
    const { movies } = useContext(MovieContext);
    const { cart, setCart, delMovie,checkOut } = useContext(CartContext);

    const navigate = useHistory();
    const [update, setUpdate] = useState(false);


    const handleDelete= async(movie) => {
        await delMovie(movie.name)
        console.log('eae')
        setUpdate(!update)
    }

    const handleCheckout= async(cart) => {
        await checkOut(cart)
        console.log('eae')
        setUpdate(!update)
    }

    useEffect(()=>{
        api.get('http://localhost:8000/cart' )
            .then(response => setCart(response.data))
            .catch(err => console.log(err))  
        }, [update])

 
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
                        <section className="trash" onClick={()=> handleDelete(movie)}>
                            <FaTrash/>
                        </section>
               </S.Box>) : null}
                
                <section>
                    <Button className="type-green" onClick={()=> handleCheckout(cart)}>Confirmar</Button>
                </section>
            </S.Container>)
    

}