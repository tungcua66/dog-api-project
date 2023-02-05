import { useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import ImageContainer from './components/ImageContainer';
import { dogRaces } from './data/dogRaces';
import dogIcon from './assets/paw.png';

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
			<img src={dogIcon} alt="dogIcon" width="100px" height="100px" />
			<h1 style={{ color: 'white' }}> Dog viewer</h1>
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
