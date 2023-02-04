import {useState, useEffect} from 'react';
import styled from '@emotion/styled';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '2px'
}))

const ButtonsContainer = styled.div(() => ({
  display: 'flex',
  gap: '2px',
  backgroundColor: 'red',
  width: '400px',
  height: '100px'
}))

const ImageContainer = styled.div(() => ({
  backgroundColor: 'pink',
  width: '500px',
  height: '500px'
}))


const App = () => {
  return (
    <Container className="App">
     <h1> Dog viewer</h1>
     <ButtonsContainer></ButtonsContainer>
     <ImageContainer></ImageContainer>
    </Container>
  );
}

export default App;
