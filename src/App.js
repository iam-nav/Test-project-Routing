import React, { Component, useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import  {BrowserRouter as Router,Route,Switch, useLocation} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import './App.css';
import Home from './components/home'
import Login from  './components/login'
import {UserInfo} from './store/UserActions'
import  Protected from './components/protected'

export class App extends Component {
  constructor(props) {
  super(props)
  this.state={
    visible:true
  }
  }
  componentWillMount(){
   return this.checkUserLoged()
  }

  checkUserLoged(){
      const token = localStorage.getItem('key')
        axios.defaults.headers.common['Authorization'] = `Bearer${token}`
        axios.get('http://api-tester.shubhamschahar.com/api/faked/chahar/react-test-1/profile')
          .then((res)=>{
           this.props.userInfo(res.data.name,res.data.designation)
          })
          .catch((e)=>{
          console.log(e)
           })
}

render() {
    return (
      <div>        
        <Router>
            <Switch >
            <Route path="/" exact component={Home} />:
            <Route path="/login"  component={Login} />
            {/* <Route path="/profile" component={HomePage}/> */}
            </Switch>
            <Protected path="/" component={Home}></Protected>
        </Router>
      </div>
    )
  }
}



const mapStateToProp = state =>{
  return{
     name:state.Name,
     designation:state.designation
  }
}


const mapDispatchToProps = dispatch=>{
  return{
      userInfo: (name,designation) =>dispatch(UserInfo(name,designation))
  }
}

export default  connect(mapStateToProp,mapDispatchToProps) (App) 

