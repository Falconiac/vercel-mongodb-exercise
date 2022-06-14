import React from 'react';
import {Navlink, useLocation} from 'react-router-dom';
import '../home/Home.css';

function Details({}) {
	const location = useLocation();
	console.log(location.state);
	return (
		<>
			return (
			<>
				<div className="header">
					<h2>Details</h2>
				</div>
				<article>
					<p>Name: {location.state.name}</p>
					<p>E-Mail: {location.state.email}</p>
					<p>Age: {location.state.age}</p>
				</article>
			</>
			);
		</>
	);
}

export default Details;
