import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import Footer from '../../components/Footer/Footer';
import { StyledHome } from './Home.styled';

const Home = () => {
  return (
    <StyledHome>
      <Navbar />
      <Carousel />
      <AnimalsList />
      <Footer />
    </StyledHome>
  );
};

export default Home;
