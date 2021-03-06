import React, {useContext} from 'react';

import { MovieContext } from '../../providers/MovieProvider';

import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
import {HiChevronRight} from 'react-icons/hi'

import * as S from './style'
import Favorite from '../../assets/favorite.svg'

export default function MovieList(props) {
    const { setSelected } = useContext(MovieContext);
    console.log(props.movies)


    return (
        <S.Container>
            <S.Title>{props.title} <HiChevronRight class="left-icon"/></S.Title>
                {(props.movies)?.map( movie => (
                    (movie.genre === props.title) ?
(                    <S.Cards  onClick={props.onOpenNewTransactionModal}
    >
                    <img src={movie.poster} alt="" className="movie-card" onClick={()=>setSelected(movie)}/>
                        <div className="movie-info">
                                <div>
                                    <BsFillHeartFill  class="icon"/>
                                </div>
                        </div>
                </S.Cards>) : null
                ))}
           
            
       
            
        </S.Container>)

}