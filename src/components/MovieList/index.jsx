import React from 'react';

import * as S from './style'
import Favorite from '../../assets/favorite.svg'

export default function MovieList(props) {
    return (
        <S.Container>
            <S.Title>{props.title}</S.Title>
            <S.Cards>
                <img href={""} alt="" className="movie-card"/>
                    <div className="movie-info">
                        <span></span>
                        <div className="meta">
                            <div>
                                <img src={Favorite} alt="" className="icon" />
                            </div>
                        </div>
                    </div>
            </S.Cards>
            <S.Cards>
                <img href={""} alt="" className="movie-card"/>
                    <div className="movie-info">
                        <span></span>
                        <div className="meta">
                            <div>
                                <img src={Favorite} alt="" className="icon" />
                            </div>
                        </div>
                    </div>
            </S.Cards>        <S.Cards>
                <img href={""} alt="" className="movie-card"/>
                    <div className="movie-info">
                        <span></span>
                        <div className="meta">
                            <div>
                                <img src={Favorite} alt="" className="icon" />
                            </div>
                        </div>
                    </div>
            </S.Cards>        <S.Cards>
                <img href={""} alt="" className="movie-card"/>
                    <div className="movie-info">
                        <span></span>
                        <div className="meta">
                            <div>
                                <img src={Favorite} alt="" className="icon" />
                            </div>
                        </div>
                    </div>
            </S.Cards>
            
        </S.Container>)

}