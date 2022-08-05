import React, {useEffect, useReducer, useState} from 'react';
import { Character } from './Character';
import '../styles/Characters.css';

const initialState = {
	favorites: [{id:1}],
};

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {...state, favorites: [...state.favorites, action.payload]};
		default: break;
	}
};

export const Characters = () => {
	const [favorites, dispatchFav] = useReducer(favoriteReducer, initialState);
	const [characters, setCharacters] = useState([]);
	
	const isFavorite = (character) => {
		// !!favorites.favorites.find(f => f.id === character.id);
		return !!favorites.favorites.find(f => f.id === character.id);
	};
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
			.then(response => response.json())
			.then(data => setCharacters(data.results));
	}, []);

	return (
		<div className='Characters'>
			{characters.map((character) => (
				<Character key={character.id} data={{character, favorite: isFavorite(character)}} favToggle={dispatchFav} />
			))}
		</div>
	);
};
