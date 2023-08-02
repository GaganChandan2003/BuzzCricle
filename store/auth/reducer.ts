import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGINR, LOGINS, LOGINF, REGF, REGR, REGS, LOGOUT } from "./action.types";
let token =AsyncStorage.getItem('token');
let username=AsyncStorage.getItem('username');
const intialState = {
    "isLoading": false,
    "isError": false,
    "token": token,
    "isAuth": !!token,
    "username": username,
    "messege":""
}

export const reducer = async(state = intialState, { type, payload, username }:any) => {
    switch (type) {
        case REGR:
            {
                return { ...state, isLoading: true, isError: false };
            }
        case REGS:
            {
                return { ...state, isLoading: false, isError: false };
            }
        case REGF:
            {
                return { ...state, isLoading: false, isError: true };
            }
        case LOGINR:
            {
                return { ...state, isLoading: true, isError: false };
            }
        case LOGINS:
            {
                if (payload) {
                    await AsyncStorage.setItem("token", payload);
                    await AsyncStorage.setItem("username", username);
                }
                return {
                    ...state, token: payload, isLoading: false, isError: false, isAuth: true, username: username,messege:"Logged in Sucessfully"
                };
            }
        case LOGINF:
            {
                return { ...state, isLoading: false, isError: true, messege:"Invalid Credentials" };
            }
        case LOGOUT:
            {
                await AsyncStorage.removeItem("token");
                
                return { ...state, isAuth: false }
            }
        default:
            {
                return state;
            }
    }
}