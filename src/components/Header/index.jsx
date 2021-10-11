import React from 'react';
import { useHistory } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'
import * as S from './style';



export default function Header(props) {
    const navigate = useHistory();

    const handlePage = (page) => {
        navigate.push(page)
    }
    return (
        <S.Bar>
            <S.Logo alt="Logo" />
            <S.Menu>
                <li 
                onClick={()=> handlePage("home")}
                className={props.page === "home" ? props.className : null}>Home</li>
                <li 
                onClick={()=> handlePage("mylist")}
                className={props.page === "mylist" ? props.className : null}>Minha Lista</li>
                <li 
                onClick={()=> handlePage("favorite")}
                className={props.page === "favorite" ? props.className : null}>Favoritos</li>
            </S.Menu>
            <S.Cart 
            onClick={()=> handlePage("cart")}
            className={props.page === "cart" ? props.className : null}
            > 
            <FaShoppingCart className="cart-icon"/></S.Cart>
            <S.User />

        </S.Bar>
    )

}