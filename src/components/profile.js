import React from 'react'
import {connect} from 'react-redux'

function Profile(props) {
    return (
        <div style={{marginTop:"5%"}}>
            <h1 style={{textAlign:"center"}}>Hello!! {props.name}</h1>
            <h3 style={{textAlign:"center"}}>Designation : {props.designation}</h3>
        </div>
    )
}
const mapStateToProp = state =>{
    return{
       name:state.Name,
       designation:state.designation
    }
  }
  
export default   connect(mapStateToProp)  (Profile) 
  
  

