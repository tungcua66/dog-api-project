import styled from '@emotion/styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Container = styled.div(({ width, height }) => ({
	width,
	height,
	backgroundColor: 'red',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '20px',

}));

const SelectGroup = styled.select(() => ({
	height: '100%',
}));

const Form = ({
	width, height, list, currentDogRace, setCurrentDogRace,
}) => {
	const [selectedValue, setSelectedValue] = useState(currentDogRace.value);
	const onChangeSelectHandler = (e) => {
		setSelectedValue(e.target.value);
		setCurrentDogRace({ ...currentDogRace, value: e.target.value });
	};
	return (
		<Container width={width} height={height}>
			<SelectGroup
				value={selectedValue}
				onChange={(e) => onChangeSelectHandler(e)}
			>
				{list.map((dogRace) => (
					<option key={dogRace.id} value={dogRace.value}>
						{dogRace.value}
					</option>
				))}
			</SelectGroup>
			<button
				type="button"
				onClick={(e) => { setCurrentDogRace({ ...currentDogRace, id: nanoid() }); }}
			>
				{' '}
				Fetch another one!

			</button>
		</Container>
	);
};

export default Form;
