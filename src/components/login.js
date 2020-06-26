import React,{useState} from 'react'
import { Button,Form,Alert} from 'react-bootstrap';
import {connect} from 'react-redux'
import {sendUserData} from '../store/UserActions'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
const [email,setemail]=useState('')
const [password,setpassword]=useState('')

const sendData = ()=>{
props.SendCredentials(email,password)
}
    return (
        <div>
        <h1 style={{marginLeft:"24%",marginTop:"7%"}}>Login Account</h1>
        <Form style={{width:"40%",marginLeft:"24%",marginTop:"1%"}}>
            <Form.Group controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} />
                 <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                 </Form.Text>
            </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} />
                    </Form.Group>
                         <Form.Group controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
        <Button variant="primary" onClick={sendData} >
            Submit
        </Button>
        </Form>
    {props.error?<Alert style={{width:"40%",marginLeft:"24%",marginTop:"10px"}} variant="danger">{props.error}</Alert>:null}
    </div>
    )
}

const mapStateToProp = state =>{
    return{
       error:state.error
    }
}


const mapDispatchToProps = dispatch=>{
    return{
        SendCredentials: (email,password) =>dispatch(sendUserData(email,password))
    }
}

export default  connect(mapStateToProp,mapDispatchToProps) (Login) 
