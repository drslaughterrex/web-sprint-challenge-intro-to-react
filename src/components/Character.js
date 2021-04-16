import React from "react";
import styled from "styled-components";

const Cards = styled.div`
	width: 80%;
	margin: 1.5rem auto;
	background-image:url('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2017%2F10%2FTiny_bit_of_U.jpg');
	display: flex;
	border: 4px solid blue;
	justify-content: center;
	ul {
		list-style: none;
	}
	h2 {
		color: green;
		font-size: 2rem;
		font-weight: bolder;
	}
	p {
		color: white;
		font-size: 1.5rem;
		font-weight: bold;
	}
`;

// Write your Character component here
export default function Character(props) {
	return (
		<>
			{props.charName.map((e) => {
				return <CardMaker key={e.name} char={e} />;
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
