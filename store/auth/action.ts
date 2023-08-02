import { REGF, REGR, REGS, LOGINS, LOGINR, LOGINF, LOGOUT } from "./action.types";
import axios from "axios";


const registerApi = (data:any) => (dispatch:any) => {
    dispatch({ type: REGR });
    return axios.post('https://buzzcircle.onrender.com/user/register', {
        "username": data.username,
        "email": data.email,
        "password": data.password,
        "phone_number": data.phone_number
    })
        .then((res) => dispatch({ type: REGS }))
        .catch((err) => dispatch({ type: REGF }))
}

const loginApi = (data:any) => (dispatch:any) => {
    dispatch({ type: LOGINR });
    return axios.post("https://buzzcircle.onrender.com/user/login", {
        "email": data.email,
        "password": String(data.password)
    })
    .then((res) => dispatch({ type: LOGINS, payload: res.data.token, username: res.data.username }))
    .catch((err) => dispatch({ type: LOGINF }));
}

const logoutApi = () => (dispatch:any) => {
    return dispatch({ type: LOGOUT });
}

export { registerApi, loginApi, logoutApi }