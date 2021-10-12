import React, { useContext,useEffect } from 'react'

import { useState } from 'react';
import Modal from 'react-modal'

import { MovieContext } from '../../providers/MovieProvider';
import { CartContext } from '../../providers/CartProvider';

import Header from '../../components/Header'
import MyMovies from '../../components/MyMovies'


const Favorite = (props) => 
{      const { favMovies, myFavorite } = useContext(MovieContext);
        myFavorite()

return (
        <>
            <Header page="cart" className="clicked" ></Header>            
                <MyMovies title="Meus favoritos" movies={favMovies}/>

        </>
    )
}

export default Favorite;