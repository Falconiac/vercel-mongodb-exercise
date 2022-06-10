import {Routes, Route, Link} from 'react-router-dom';

import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import Footer from './components/footer/Footer';
import Create from './components/pages/create/Create.js';
import Home from './components/pages/home/Home';
import './App.css';

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Create" element={<Create />} />
			</Routes>
			<Footer />;
		</>
	);
}

// Rausgenommen:
// <GlobalStyle />
// 			<div>
// 				<Exercise1 />
// 				<hr />
// 				<Exercise2 />
// 				<hr />
// 				<Exercise3 />
// 				<hr />
// 				<Exercise4 />
// 			</div>
