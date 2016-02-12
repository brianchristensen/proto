import React from 'react'
import { Link } from 'react-router'

export class BadRequest extends React.Component {
	render () {
		return (
			<div>
				<h1>The page you requested could not be found.</h1>
				<hr />
				<Link to='/'>Back To Home View</Link>
			</div>
		)
	}
}

export default BadRequest;
