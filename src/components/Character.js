import React from "react";
import styled from "styled-components";

const Cards = styled.div`
	width: 50%;
	margin: 1.5rem auto;
	background-image: url("https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80");
	display: flex;
	justify-content: space-around;

	ul {
		list-style: none;
	}
	h2 {
		color: red;
		font-size: 1.8rem;
		font-weight: bolder;
	}
	p {
		color: white;
		font-size: 1.25rem;
		
	}
`;

// Write your Character component here
export default function Character(props) {
	return (
		<>
			{props.charName.map((entry) => {
				return <CardMaker key={entry.name} char={entry} />;
			})}
		</>
	);
}

const CardMaker = ({ char }) => {
	return (
		<Cards>
			<ul>
				<li>
					<h2>Character Name: {char.name}</h2>
					<p>Birth Year: {char.birth_year}</p>
					<p>Gender: {char.gender}</p>
					<p>Hair Color: {char.hair_color}</p>
					<p>Eye Color: {char.eye_color}</p>
					<p>Height: {char.height}</p>
				</li>
			</ul>
		</Cards>
	);
};
