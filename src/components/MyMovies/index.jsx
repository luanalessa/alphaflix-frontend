import React, {useContext} from 'react';

import { MovieContext } from '../../providers/MovieProvider';

import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
import {HiChevronRight} from 'react-icons/hi'

import * as S from './style'
import Favorite from '../../assets/favorite.svg'

export default function MyMovies(props) {
    // const { movies, genres, myList, myMovies } = useContext(MovieContext);

    return (
        <S.Container>
            <S.Title>{props.title} <HiChevronRight class="left-icon"/></S.Title>
                {(props.movies)?.map( movie => (
                    
(                    <S.Cards>
                    <img src={movie.poster} alt="" className="movie-card" />
                        <div className="movie-info">
                                <div>
                                    <BsFillHeartFill  class="icon"/>
                                </div>
                        </div>
                </S.Cards>) 
                ))}
           
            
       
            
        </S.Container>)

}