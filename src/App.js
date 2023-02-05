import { useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import ImageContainer from './components/ImageContainer';
import { dogRaces } from './data/dogRaces';

const Container = styled.div(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '2px',
	backgroundColor: '#071e22',
	height: '100vh',
}));

const App = () => {
	const [currentDogRace, setCurrentDogRace] = useState(dogRaces[0]);
	return (
		<Container className="App">
			<h1> Dog viewer</h1>
			<Form
				width="400px"
				height="70px"
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
