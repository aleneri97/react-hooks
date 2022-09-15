import React, {useEffect, useReducer, useState, useMemo} from 'react';
import { Character } from './Character';
import '../styles/Characters.css';

const initialState = {
	favorites: [{id:1}],
};

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {...state, favorites: [...state.favorites, action.payload]};
		case 'REMOVE_FAVORITE':
			return {...state, favorites: [...state.favorites].filter(fav => fav.id !== action.payload.id)};
		default: break;
	}
};

export const Characters = () => {
	const [favorites, dispatchFav] = useReducer(favoriteReducer, initialState);
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState('');
	
	const isFavorite = (character) => {
		// !!favorites.favorites.find(f => f.id === character.id);
		return !!favorites.favorites.find(f => f.id === character.id);
	};
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
			.then(response => response.json())
			.then(data => setCharacters(data.results));
	}, []);

	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	// const filteredCharacters = characters.filter(user => {
	// 	return user.name.toLowerCase().includes(search.toLowerCase());
	// });

	const filteredCharacters = useMemo(() =>
		characters.filter(user => user.name.toLowerCase().includes(search.toLowerCase())),
		[characters, search]
	);

	return (
		<div className='Characters'>

			<div className="Search">
				<input type="text" placeholder="Search term: Morty, Rick..." value={search} onChange={handleSearch} />
			</div>
			
			{filteredCharacters.map((character) => (
				<Character key={character.id} data={{character, favorite: isFavorite(character)}} favToggle={dispatchFav} />
			))}
		</div>
	);
};
