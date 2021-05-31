import React from 'react';
import './Projects.css';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import Project1 from '../images/Project1.jpg';
import Project2 from '../images/Project2.jpg';
import Project3 from '../images/Project3.jpg';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Header from './Header';

function Projects() {
	const items = [
		{
			name: 'Project name',
			description: 'Vivamus imperdiet hendrerit leo quis fringilla.',
			image: Project1,
		},
		{
			name: 'Project name',
			description: 'Vivamus imperdiet hendrerit leo quis fringilla.',
			image: Project2,
		},
		{
			name: 'Project name',
			description: 'Vivamus imperdiet hendrerit leo quis fringilla.',
			image: Project3,
		},
	];

	return (
		<div id="projects" className="projects">
			<Header />
			<h1 className="projects__title">projects</h1>
			<Carousel
				className="projects__carousel"
				PrevIcon={<ArrowBackIosRoundedIcon fontSize="large" />}
				NextIcon={<ArrowForwardIosRoundedIcon fontSize="large" />}
				navButtonsProps={{
					style: {
						color: '#443d5b',
						backgroundColor: 'white',
						borderRadius: 0,
						padding: '10px 5px',
					},
				}}
				navButtonsAlwaysVisible
				indicators={false}
				autoPlay={false}
			>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</div>
	);
}

export default Projects;
