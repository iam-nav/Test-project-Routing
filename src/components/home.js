import React from 'react'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'


function Home(props) {
     
    function login(){
     window.location="/Login"
    }


    return (
        <div style={{textAlign:"center",marginTop:"10%"}}>
            {props.name===""?<h1>WELCOME GUEST</h1>:<h1>WELCOME {props.name}</h1>}
            {props.name===""?<Button onClick={login} >Login</Button>:null}
        </div>
            )
        }

  
        const mapStateToProp = state =>{
            return{
                 name:state.Name,
                 designation:state.designation
            }
        }
  
  export default  connect(mapStateToProp)(Home) 
  
  
