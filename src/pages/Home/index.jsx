import React, { useContext,useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-modal'

import { MovieContext } from '../../providers/MovieProvider';

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import MovieDescriptionModal from '../../components/MovieDescriptionModal'

Modal.setAppElement('#root')

const Home = (props) => 
{   const { movies, genres } = useContext(MovieContext);
    const [isMovieDescriptionModal, setIsMovieDescriptionModal] = useState(false)

    const handleOpenMovieDescriptionModal = () => {
        setIsMovieDescriptionModal(true)
        console.log(isMovieDescriptionModal)
    }

    const handleCloseMovieDescriptionModal = () => {
        setIsMovieDescriptionModal(false)
        console.log(isMovieDescriptionModal)

    }

  

   
    return (
        <>
            <Header page="home" className="clicked" ></Header>            
            { genres ? genres.map(genre => 
                <MovieList title={genre.title} onOpenNewTransactionModal={handleOpenMovieDescriptionModal}/>
            ) :  null}

            <MovieDescriptionModal
                isOpen={isMovieDescriptionModal}
                onRequestClose={handleCloseMovieDescriptionModal}
                movies={movies}
            />
        </>
    )
}

export default Home;