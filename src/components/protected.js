import React from 'react'
import {Redirect,Route} from 'react-router'

const Protected=({components:Cmp,...rest}) =>{
  return <Route
   {...rest}
   render={(props)=>{
       localStorage.getItem('key')?(
           <Cmp {...props}/>
       ):
       <Redirect
       to="/login"
       ></Redirect>
   }} />
}

export default Protected
