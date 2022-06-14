import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<section className="navBar">
			<NavLink className="button" to="/">
				Home
			</NavLink>
			<NavLink className="button" to="/Create">
				Create
			</NavLink>
		</section>
	);
}

export default Footer;
