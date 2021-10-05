import React from 'react'

import Header from '../../components/Header'
import Slide from '../../components/Slide'
import MovieList from '../../components/MovieList'

const Home = () => 
{
    return (
        <>
            <Header page="home" className="clicked" ></Header>
            <Slide />
            <MovieList title="Novos"/>
            <MovieList title="Programação Web"/>
            <MovieList title="Back-end"/>

        </>
    )
}

export default Home;