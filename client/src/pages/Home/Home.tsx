import Carousel from '../../components/Carousel/Carousel';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import { StyledHome } from './Home.styled';

const Home = () => {
  return (
    <StyledHome>
      <Carousel />
      <AnimalsList />
    </StyledHome>
  );
};

export default Home;
