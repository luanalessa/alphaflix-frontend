import React, {createContext, useState, useCallback} from 'react';
import api from '../services/api.js'


export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [ cart, setCart] = useState(()=>{
        api.get('http://localhost:8000/cart' )
        .then(response => setCart(response.data))
        .catch(err => console.log(err))
    });

    const addMovie = (data) => {
        api.post('http://localhost:8000/cart/add', data )
        .then(response => setCart(response.data))
        .catch(err => console.log(err))
    };

    const delMovie = (data) => {
        api.delete(`http://localhost:8000/cart/delete/${data}`)
        .catch(err => console.log(err))
    };

   
    return(
        <CartContext.Provider
            value={{
                cart,
                addMovie,
                delMovie
            }}
        >

            {props.children}
        </CartContext.Provider>
    )
}