import React from 'react';
import createReactClass from 'create-react-class';
import {Link} from 'react-router-dom';


// export const TasksTable = createReactClass({
// 	render(){
// 		return <div>
// 		<Link to="/id">TaskTable is meeeee!</Link>

// 		</div>
// 	}
// });

export const TasksTable = (props) => {
    const tasks = props.tasks;
    const tasksList = tasks.map(( x, i )=> 
    		<li key={i}>
	        	<span><Link to={`/${x.id}`}>{x.name}</Link></span>
	        	<span>{x.tags}</span>
	        	<span>{x.actual_effort}</span>
	        	<span>{x.estimated_effort}</span>
	        	<span>{x.due_date}</span>
	        	
	        	<span></span>
				
			</li>)
    return  <ul className="prod_holder">
            	{tasksList}
            </ul>

            };