import axios from 'axios'

export function getUsers(){
    return async function (dispatch){
        var json = await axios.get('https://accounts-cd8ab-default-rtdb.firebaseio.com/.json')
        return dispatch({
            type: 'GET_USERS',
            payload: json.data
        })
    }
}