import React, {createContext, useState, useCallback} from 'react';
import api from '../services/api.js'


export const CartContext = createContext({});

export const CartProvider = (props) => {
    const [ cart, setCart] = useState();

    const addMovie = useCallback((data) => {
        api.post('http://localhost:8000/cart/add', data )
        .then(response => setCart(response.data))
        .catch(err => console.log(err))
    },[])

    //RESOLVER PORQUE O JOÃO FICA PUTO
    const delMovie = useCallback((data) => {
        api.delete(`http://localhost:8000/cart/delete/${data}`)
        .then(()=>{
            api.get('http://localhost:8000/cart' )
            .then(response => setCart(response.data))
            .catch(err => console.log(err))  
        })
        .catch(err => console.log(err))
    },[])

    const checkOut = useCallback((data) => {
        console.log(data)
        api.put('http://localhost:8000/cart/checkout',data)
        .then(()=>{
            api.get('http://localhost:8000/cart' )
            .then(response => setCart(response.data))
            .catch(err => console.log(err))  
        })
        .catch(err => console.log(err))
    },[])

   
    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addMovie,
                delMovie,
                checkOut
            }}
        >

            {props.children}
        </CartContext.Provider>
    )
}