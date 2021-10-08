import React from 'react';

import * as S from './style';


export default function Header(props) {
    return (
        <S.Bar>
            <S.Logo alt="Logo" />
            <S.Menu>
                <li className={props.page === "home" ? props.className : null}>Home</li>
                <li className={props.page === "category" ? props.className : null}>Categoria</li>
                <li className={props.page === "mylist" ? props.className : null}>Minha Lista</li>
                <li className={props.page === "favorite" ? props.className : null}>Favoritos</li>
            </S.Menu>
            <S.Alert alt="Alerta" />
            <S.User />

        </S.Bar>
    )

}