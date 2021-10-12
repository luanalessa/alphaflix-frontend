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

    const [ myMovies, setMyMovies ] = useState();

    const myList =  useCallback(() =>{
        api.get('http://localhost:8000/home/mylist')
        .then(response => setMyMovies(response.data))
        .catch(err => console.log(err))
    },[])

    const [ favMovies, setFavMovies ] = useState();


    const myFavorite =  useCallback( () =>{
        api.get('http://localhost:8000/home/myfavorite')
        .then(response => setFavMovies(response.data))
        .catch(err => console.log(err))
    },[])
    
    const setFavorite =  useCallback( data =>{
        api.post('http://localhost:8000/home/myfavorite', {title:data})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    },[])
    
    

    return(
        <MovieContext.Provider
            value={{
                movies,
                genres,
                selected,
                setSelected,
                myList,
                myMovies,
                favMovies,
                myFavorite,
                setFavorite
            }}
        >

            {props.children}
        </MovieContext.Provider>
    )
}