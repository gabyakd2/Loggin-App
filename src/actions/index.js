import axios from 'axios'
export const GET_USERS = 'GET_USERS';
export const GET_USERS_EMAIL = 'GET_USERS_EMAIL'


export function getUsers(){
    return async function (dispatch){
        var json = await axios.get('https://accounts-cd8ab-default-rtdb.firebaseio.com/.json')
        return dispatch({
            type: 'GET_USERS',
            payload: json.data
        })
    }
}


export function getUsersEmail(email){
        return {
            type: 'GET_USERS_EMAIL',
            payload: email,
        }
}