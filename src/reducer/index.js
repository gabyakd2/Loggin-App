import { GET_USERS, GET_USERS_EMAIL } from '../actions'

const initialState = {
    users: [],
    detailUser: []
}


function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        
        case GET_USERS_EMAIL:
            let emailsFiltered = state.users.filter(el => el.email === action.payload)
            return{
                ...state,
                detailUser: emailsFiltered
            }
            
    
        default: return state
            
    }
}


export default rootReducer