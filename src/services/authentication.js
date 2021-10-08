import jwt from 'jsonwebtoken';

export const isAuthenticated = (username) => {
    const token = localStorage.getItem("token");

    if (jwt.decode(token)) return true;
    return false;

}
