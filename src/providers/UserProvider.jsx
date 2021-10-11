import React, {createContext, useState, useCallback} from 'react';
import api from '../services/api.js'


export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [ user, setUser] = useState(()=>{
        api.get('http://localhost:8000/home')
        .then(response => setUser(response.data))
        .catch(err => console.log(err))
    });

    
    return(
        <UserContext.Provider
            value={{
                user
            }}
        >

            {props.children}
        </UserContext.Provider>
    )
}