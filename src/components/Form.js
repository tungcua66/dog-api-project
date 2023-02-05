import styled from '@emotion/styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { styleOne } from '../styles/buttonStyles';
// import Button from './Button';

const Container = styled.div(({ width, height }) => ({
	width,
	height,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '20px',

}));

const SelectContainer = styled.div(() => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '0',
	margin: '0',
	height: '2em',
	width: '10em',
	boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

}));

const Select = styled.select(() => ({
	height: '100%',
	width: '100%',
	border: 'none',
	backgroundColor: '#1d7874',
	color: 'white',
	font: '1.2em "Fira Sans, Arial, Roboto", sans-serif',
	borderRadius: '5px',
}));

const Button = styled.button(() => ({ ...styleOne }));

const Form = ({
	width, height, list, currentDogRace, setCurrentDogRace,
}) => {
	const [selectedValue, setSelectedValue] = useState(currentDogRace.value);
	const onChangeSelectHandler = (e) => {
		setSelectedValue(e.target.value);
		setCurrentDogRace({ ...currentDogRace, value: e.target.value });
	};
	return (
		<Container width={width} height={height} className="FormContainer">
			<SelectContainer className="SelectorContainer">
				<Select
					className="Select"
					value={selectedValue}
					onChange={(e) => onChangeSelectHandler(e)}

				>
					{list.map((dogRace) => (
						<option key={dogRace.id} value={dogRace.value}>
							{dogRace.value}
						</option>
					))}
				</Select>
			</SelectContainer>
			<Button
				type="button"
				onClick={() => { setCurrentDogRace({ ...currentDogRace }); }}
			>
				Fetch another one!
			</Button>

		</Container>
	);
};

export default Form;
