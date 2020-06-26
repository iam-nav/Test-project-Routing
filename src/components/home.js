import React from 'react'
import { Button,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import login from './login';
import { Redirect } from 'react-router';

function Home(props) {
   function login(){
   window.location="/Login"
    }
    return (
        <div>
        {props.name===""?<h1>WELCOME GUEST</h1>:<h1>WELCOME {props.name}</h1>}
        <Button onClick={login} >Login</Button>
        </div>
    )
}

  
const mapStateToProp = state =>{
    return{
       name:state.Name,
       designation:state.designation
    }
  }
  
  export default  connect(mapStateToProp)  (Home) 
  
  
