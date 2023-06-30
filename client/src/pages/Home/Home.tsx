import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Carousel from '../../components/Carousel/Carousel';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import { StyledHome } from './Home.styled';
import { fetchAnimalsAsync } from '../../features/animals/animalsSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnimalsAsync('1'));
  }, [dispatch]);

  return (
    <StyledHome>
      <Carousel />
      <AnimalsList />
    </StyledHome>
  );
};

export default Home;
