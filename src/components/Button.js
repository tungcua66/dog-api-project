import styled from '@emotion/styled';

const Container = styled.button(() => ({
	appearance: 'button',
	backgroundColor: '#1899D6',
	border: 'solid transparent',
	borderRadius: '16px',
	borderWidth: '0 0 4px',
	boxSizing: 'border-box',
	color: '#FFFFFF',
	cursor: 'pointer',
	display: 'inline-block',
	fontFamily: 'din-round,sans-serif',
	fontSize: '15px',
	fontWeight: '700',
	letterSpacing: '.8px',
	lineHeight: '20px',
	margin: '0',
	outline: 'none',
	overflow: 'visible',
	padding: '13px 16px',
	textAlign: 'center',
	textTransform: 'uppercase',
	touchAction: 'manipulation',
	transform: 'translateZ(0)',
	transition: 'filter .2s',
	// userSelect: 'none',
	//   -webkit-user-select: 'none',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap',
	width: '100%',

	// .button-19:after {
	//   background-clip: padding-box,
	//   background-color: #1CB0F6,
	//   border: solid transparent,
	//   border-radius: 16px,
	//   border-width: 0 0 4px,
	//   bottom: -4px,
	//   content: "",
	//   left: 0,
	//   position: absolute,
	//   right: 0,
	//   top: 0,
	//   z-index: -1,
	// }

	// .button-19:main,
	// .button-19:focus {
	//   user-select: auto,
	// }

	// .button-19:hover:not(:disabled) {
	//   filter: brightness(1.1),
	//   -webkit-filter: brightness(1.1),
	// }

// .button-19:disabled {
//   cursor: auto,
// }
}));

const Button = ({ title }) => (
	<Container>
		{' '}
		{title}
	</Container>
);

export default Button;
