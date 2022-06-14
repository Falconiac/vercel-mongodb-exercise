import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';

const Home = ({data}) => {
	return (
		<>
			<div className="header">
				<h2>Home</h2>
			</div>
			<ul className="itemlist">
				{data.map(item => {
					return (
						<li key={item._id}>
							{item.name}{' '}
							<NavLink className="button" to="/Details" state={item}>
								Details
							</NavLink>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
