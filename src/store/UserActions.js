import {USERINFO,LOGIN_FAILED,LOGIN_SUCCESS} from './actionTypes'
import {useHistory} from 'react-router-dom'

import axios from 'axios'


export const LoginUser = (token)=>{
    return {
        type:LOGIN_SUCCESS,
        token
    }
}

export const Loginfailed = (error)=>{
    return {
        type:LOGIN_FAILED,
        error
    }
}


export const UserInfo = (name,designation)=>{
    return {
        type:USERINFO,
        name,
        designation
    }
}



export const sendUserData =(email,password)=>{
    return (dispatch)=>{
        axios({
            method: 'post',
            url: 'http://api-tester.shubhamschahar.com/api/faked/chahar/react-test-1/login',
            data: {
              email,
              password
            }
        })
        .then(res=>{
          const  Token = localStorage.setItem('key',res.data.token)
          window.location = '/profile'
        })
        .catch((e=>{
            dispatch(Loginfailed(e.response.data.error))
        }))







        // console.log('working')
        // dispatch(fetchUserRequest)
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(res=>{
        //     const user = res.data.map((user=>user.name))
        //     dispatch(fetchUserSuccess(user))
        // })
        // .catch(error =>{
        //     const errorMsg = error.message
        //     dispatch(fetchUserFailure(errorMsg))
        // })
    }
}



export const GetUser =(token)=>{
    return (dispatch)=>{
console.log('user get')
    }}


