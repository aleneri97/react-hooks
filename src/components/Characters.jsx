import React, {useEffect, useState} from 'react';
import { Character } from './Character';
import '../styles/Characters.css'

export const Characters = () => {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
			.then(response => response.json())
			.then(data => setCharacters(data.results));
	}, []);

	return (
		<div className='Characters'>
			{characters.map((character) => (
				<Character key={character.id} data={character}/>
			))}
		</div>
	);
};
