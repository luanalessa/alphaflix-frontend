import api from './api';

export const login = (data) => {
    return new Promise((resolve, reject) => {
        api.post('http://localhost:8000/login', data)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data);
                    resolve(true);
                }
                else reject(false);
            })
    })
}

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        api.get('http://localhost:8000/home')
            .then(response => resolve(response.data))
            .catch(err => reject(err))
    })
}

export const getGenres = () => {
    return new Promise((resolve, reject) => {
        api.get('http://localhost:8000/home/genres')
            .then(response => resolve(response.data))
            .catch(err => reject(err))
    })
}
