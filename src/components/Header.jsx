import React, {useState} from 'react';

export const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkToggle = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className='Header'>
			<h1>React Hook</h1>
			<button type='button' onClick={handleDarkToggle}>
				Mode: {darkMode ? 'Dark' : 'Light'}
			</button>
		</div>
	);
};
