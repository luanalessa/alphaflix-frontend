import React, {createContext, useState, useCallback} from 'react';
import api from '../services/api.js'


export const MovieContext = createContext({});

export const MovieProvider = (props) => {
    const [ movies, setMovies] = useState(()=>{
        api.get('http://localhost:8000/home')
        .then(response => {setMovies(response.data)
        console.log(response.data)})
        .catch(err => console.log(err))
    });

    const [ genres, setGenres ] = useState(()=>{
        api.get('http://localhost:8000/home/genres')
        .then(response => setGenres(response.data))
        .catch(err => console.log(err))
    });

    const [ selected, setSelected ] = useState();

    
    return(
        <MovieContext.Provider
            value={{
                movies,
                genres,
                selected,
                setSelected
            }}
        >

            {props.children}
        </MovieContext.Provider>
    )
}