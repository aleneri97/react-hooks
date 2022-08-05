import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext)

	const handleDarkToggle = () => {
		toggleTheme();
	};

	return (
		<div className='Header'>
			<h1>React Hook</h1>
			<button type='button' onClick={handleDarkToggle}>
				Mode: {theme.theme}
			</button>
		</div>
	);
};
