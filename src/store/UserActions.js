import {USERINFO,LOGIN_FAILED} from './actionTypes'
import axios from 'axios'

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
            }})
        .then(res=>{
          localStorage.setItem('key',res.data.token)
          window.location = '/profile'
        })
        .catch((e=>{
            dispatch(Loginfailed(e.response.data.error))
        }))
    }
}