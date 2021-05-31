import React from 'react';
import './Item.css';

function Item(props) {
	return (
		<>
			<img
				className="item__image"
				src={props.item.image}
				alt={props.item.name}
			/>
			<div className="item__innerDiv">
				<h1>{props.item.name}</h1>
				<p className="item__description">{props.item.description}</p>
			</div>
		</>
	);
}

export default Item;
