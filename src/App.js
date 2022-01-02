import './App.css';
import React, { useState, createContext, useContext } from 'react';

const data = ['JavaScript', 'Python', 'JAVA'];

const LanguageContext = createContext();

function App() {
	const [item, setItem] = useState(data[0]);
	const [index, setIndex] = useState(0);

	const changeItem = () => {
		const newIndex = data.length > index + 1 ? index + 1 : 0;
		setIndex(newIndex);
		setItem(data[newIndex]);
	};

	return (
		<LanguageContext.Provider value={{ item, changeItem }}>
			<Child />
		</LanguageContext.Provider>
	);
}

export const Child = () => {
	const getLanguage = useContext(LanguageContext);

	const onChange = () => {
		getLanguage.changeItem();
	};
	return (
		<div>
			<p id='favoriteLanguage'>Favorite programing languoge: {getLanguage.item}</p>
			<button id='changeFavorite' onClick={onChange}>
				Togle language
			</button>
		</div>
	);
};

export default App;
