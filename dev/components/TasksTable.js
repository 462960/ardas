import React from 'react';
import createReactClass from 'create-react-class';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const TasksTable = (props) => {
    const {tasks} = props;
    const taskUnit = tasks.map(( x, i )=> 
			<tr key={i} className={x.obj_status !== 'active' ? 'none' : '' }>
          		<td><Link className={x.is_high_priority ? 'priority' : ''} to={`/${x.id}`}>{x.name}</Link></td>
          		<td><span>{x.tags ? x.tags[0] : []}<br/>{x.tags ? x.tags[1] : []}</span></td>
          		<td>{x.actual_effort}</td>
          		<td>{x.estimated_effort}</td>
          		<td>{x.due_date}</td>
           </tr>
			)

    return (
    	<section>
	<h1>Tasks list</h1>
	<a className="github" target="_blank" href="https://github.com/462960/ardas.git">GitHub</a>
	<div className="tbl-header">
		<table cellPadding="0" cellSpacing="0" border="0">
			<thead>
				<tr>
					<th>Task Name</th>
					<th>Tags</th>
					<th>Actual effort</th>
					<th>Estim effort</th>
					<th>Due to</th>
				</tr>
			</thead>
		</table>
	</div>
	<div className="tbl-content">
		<table cellPadding="0" cellSpacing="0" border="0">
			<tbody>{taskUnit}</tbody>
		</table>
	</div>
</section>
    	)
      };

      TasksTable.propTypes = {
      	tasks: PropTypes.array.isRequired
      }