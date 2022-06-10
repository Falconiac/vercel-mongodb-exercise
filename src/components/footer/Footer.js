import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<section className="navBar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/Create">Create</NavLink>
		</section>
	);
}

export default Footer;
