import React from 'react'
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Modal from 'react-modal'


import { getMovies, getGenres } from '../../services/controllers'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import MovieDescriptionModal from '../../components/MovieDescriptionModal'

Modal.setAppElement('#root')

const Home = () => 
{
    const [isMovieDescriptionModal, setIsMovieDescriptionModal] = useState(false)
    const [ movies, setMovies] = useState();
    const [ genres, setGenres ] = useState();

    const handleOpenMovieDescriptionModal = () => {
        setIsMovieDescriptionModal(true)
        console.log(isMovieDescriptionModal)
    }

    const handleCloseMovieDescriptionModal = () => {
        setIsMovieDescriptionModal(false)
        console.log(isMovieDescriptionModal)

    }

    useEffect(() => {
        api.get('http://localhost:8000/home')
            .then(response => setMovies(response.data))
            .catch(err => console.log(err))
      }, [])

    useEffect(() => {
            api.get('http://localhost:8000/home/genres')
                .then(response => setGenres(response.data))
                .catch(err => console.log(err))
    }, [])


   
    return (
        <>
            <Header page="home" className="clicked" ></Header>            
            { genres ? genres.map(genre => 
                <MovieList title={genre.title} movies={movies} onOpenNewTransactionModal={handleOpenMovieDescriptionModal}/>
            ) :  getGenres}

            <MovieDescriptionModal
                isOpen={isMovieDescriptionModal}
                onRequestClose={handleCloseMovieDescriptionModal}
                movies={movies}
            />
        </>
    )
}

export default Home;