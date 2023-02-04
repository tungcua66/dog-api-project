import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Container = styled.img(({width='500px', height='500px'}) => ({
    width,
    height,
}))

const ImageContainer = ({dogRace}) => {
  const [urlImage, setUrlImage] = useState();
  const baseURL = process.env.REACT_APP_BASE_API;
  useEffect(() => {
    const fetchAPI = async (url) => {
        try {
            const res = await axios({
                method: 'GET',
                url
            })
            setUrlImage(res.data.message);
        } catch (error) {
            console.error(error.message);
        }
        
    }
    fetchAPI(`${baseURL}/${dogRace.value.toLowerCase()}/images/random`);
  }, [baseURL, dogRace])
  
  return (
    <Container 
        src={urlImage}
        alt={dogRace.value}
    />
  )
}

export default ImageContainer