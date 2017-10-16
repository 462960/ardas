import React from 'react';
import {Link} from 'react-router-dom';
import createReactClass from 'create-react-class';


export const Item = createReactClass({
	render(){
		const i = this.props.tasks.findIndex( x => x.id == this.props.location.pathname.substr(1));
		const task = this.props.tasks[i];
	return (
		<div className="red">
	    <p>I'm Item! {this.props.location.pathname.substr(1)}</p>
	    <p>My name is: {task.name}</p>
	    <input type="text" defaultValue={task.name}/>
	    <p>My index is {i}</p>
	    <Link to="/">Back Home</Link>
	    </div>
	    )
	}
});