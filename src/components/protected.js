import React from 'react'
import {Redirect,Route} from 'react-router'

const Protected=({component:Cmp,...rest}) =>(
<Route
{...rest}
render={(props)=>
    localStorage.getItem('key')?(<Cmp {...props} />):
    <Redirect to="/"/>
}
/>
)

export default Protected
