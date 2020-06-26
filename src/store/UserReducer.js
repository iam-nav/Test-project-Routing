import {LOGIN_FAILED,USERINFO} from './actionTypes'

const initialState = {
    error:'',
    Name:'',
    designation:''
}

export const UserReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_FAILED:
            return{
                ...state,
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