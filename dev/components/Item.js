import React from 'react';
import {Link} from 'react-router-dom';


export const Item  = (props) => 
<div className="red">
<p>I'm Item! {props.location.pathname}</p>
<p>My id is {props.tasks.id}</p>
<Link to="/">Back Home</Link>
</div>