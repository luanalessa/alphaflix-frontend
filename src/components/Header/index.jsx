import React, {useContext,useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'
import * as S from './style';

import api from '../../services/api.js'

import { CartContext } from '../../providers/CartProvider';
import { MovieContext } from '../../providers/MovieProvider';
export default function Header(props) {
    const navigate = useHistory();
    const [update, setUpdate] = useState(false);
    const { setCart } = useContext(CartContext);
    const { myList } = useContext(MovieContext);



    const handlePage = (page) => {
        if(page === 'cart'){
            setUpdate(!update)
        }
        navigate.push(page)
    }

    useEffect(()=>{
        api.get('http://localhost:8000/cart' )
            .then(response => setCart(response.data))
            .catch(err => console.log(err))
         }, [update])

    return (
        <S.Bar>
            <S.Logo alt="Logo" />
            <S.Menu>
                <li 
                onClick={()=> handlePage("home")}
                className={props.page === "home" ? props.className : null}>Home</li>
                <li 
                onClick={()=> {
                    myList();
                    handlePage("mylist")
                }}
                className={props.page === "mylist" ? props.className : null}>Minha Lista</li>
                <li 
                onClick={()=> { handlePage("favorite")
                }}
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