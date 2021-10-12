import React, { useContext,useEffect } from 'react'

import { useState } from 'react';
import Modal from 'react-modal'

import { MovieContext } from '../../providers/MovieProvider';
import { CartContext } from '../../providers/CartProvider';

import Header from '../../components/Header'
import MyMovies from '../../components/MyMovies'


const MyList = (props) => 
{  
    const { movies, genres, myList, myMovies } = useContext(MovieContext);

    return (
        <>
            <Header page="cart" className="clicked" ></Header>            
                <MyMovies title="Minha Lista" movies={myMovies}/>

        </>
    )
}

export default MyList;