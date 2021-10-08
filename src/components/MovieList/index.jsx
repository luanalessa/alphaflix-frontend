import React from 'react';
import { useState } from 'react';

import * as S from './style'
import Favorite from '../../assets/favorite.svg'

export default function MovieList(props) {
    const [data] = useState(props.movies)

    return (
        <S.Container>
            <S.Title>{props.title}</S.Title>
                {data.map( movie => (
                    (movie.genre === props.title) ?
(                    <S.Cards  onClick={props.onOpenNewTransactionModal}
    >
                    <img src={movie.poster} alt="" className="movie-card"/>
                        <div className="movie-info">
                            <div className="meta">
                                <div>
                                    <img src={Favorite} alt="" className="icon" />
                                </div>
                            </div>
                        </div>
                </S.Cards>) : null
                ))}
           
            
       
            
        </S.Container>)

}