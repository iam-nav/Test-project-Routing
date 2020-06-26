import {LOGIN_SUCCESS,LOGIN_FAILED,USERINFO} from './actionTypes'

const initialState = {
    token:'',
    error:'',
    Name:'',
    designation:''
}

export const UserReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                token:action.token,
                error:''
            }
        case LOGIN_FAILED:
            return{
                ...state,
               token:'',
               error:action.error
            }
        case USERINFO:
            return{
                ...state,
                Name:action.name,
                designation:action.designation
            }     
        default: return state
    }
}