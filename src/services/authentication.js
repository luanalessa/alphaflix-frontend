import jwt from 'jsonwebtoken';

export const isAuthenticated = (username) => {
    // const token = localStorage.getItem("token");
    const userCookie = (document.cookie).split('=')[1]
    const token = userCookie

    if (jwt.decode(token)) return true;
    return false;

}
