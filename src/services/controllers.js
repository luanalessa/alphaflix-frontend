import api from './api';

export const login =  (data) => {
    return new Promise((resolve, reject) => {
        api.post('http://localhost:8080/login', data )
        .then(response => {
            if(response.status === 200)
            {
                localStorage.setItem('token', response.data);
                resolve(true);
            }
            else reject(false);
        })

    })
    
}

