import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import ImageContainer from './components/ImageContainer';
import { dogRaces } from './data/dogRaces';

const Container = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignItems: 'center',
	gap: '2px',
}));

const App = () => {
	const [currentDogRace, setCurrentDogRace] = useState(dogRaces[0]);
	return (
		<Container className="App">
			<h1> Dog viewer</h1>
			<Form
				width="400px"
				height="50px"
				list={dogRaces}
				currentDogRace={currentDogRace}
				setCurrentDogRace={setCurrentDogRace}
			/>
			<ImageContainer
				dogRace={currentDogRace}
			/>
		</Container>
	);
};

export default App;
