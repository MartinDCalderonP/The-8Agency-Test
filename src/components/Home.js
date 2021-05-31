import React from 'react';
import './Home.css';
import Header from './Header';

function Home() {
	return (
		<div id="home" className="home">
		<Header />
			<div className="home__upLeft"></div>
			<div className="home__center">
				<h1 className="home__title">dedicated to the future</h1>
				<h2 className="home__subtitle">web template</h2>
			</div>
			<div className="home__downRight"></div>
		</div>
	);
}

export default Home;
