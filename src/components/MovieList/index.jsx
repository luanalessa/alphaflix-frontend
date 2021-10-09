import React from 'react';
import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs'
import {HiChevronRight} from 'react-icons/hi'

import * as S from './style'
import Favorite from '../../assets/favorite.svg'

export default function MovieList(props) {
    const [data] = useState(props.movies)

    return (
        <S.Container>
            <S.Title>{props.title} <HiChevronRight class="left-icon"/></S.Title>
                {data.map( movie => (
                    (movie.genre === props.title) ?
(                    <S.Cards  onClick={props.onOpenNewTransactionModal}
    >
                    <img src={movie.poster} alt="" className="movie-card"/>
                        <div className="movie-info">
                                <div>
                                    <BsFillHeartFill  class="icon"/>
                                </div>
                        </div>
                </S.Cards>) : null
                ))}
           
            
       
            
        </S.Container>)

}