import React, { useContext,useEffect } from 'react'

import { useState } from 'react';
import Modal from 'react-modal'

import { MovieContext } from '../../providers/MovieProvider';
import { CartContext } from '../../providers/CartProvider';

import Header from '../../components/Header'
import MovieCart from '../../components/MovieCart'

import api from '../../services/api.js'

const Cart = (props) => 
{   const { movies, genres } = useContext(MovieContext);
    const { cart, setCart, delMovie,checkOut } = useContext(CartContext);

  

   
    return (
        <>
            <Header page="cart" className="clicked" ></Header>            
                <MovieCart title="Meu carrinho" movies={cart} />

        </>
    )
}

export default Cart;