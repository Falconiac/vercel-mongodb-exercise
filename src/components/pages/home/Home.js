import React from 'react';
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
							<button
								onClick={() => {
									console.log(item._id);
								}}
							>
								Details
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
