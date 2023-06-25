import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import Footer from '../../components/Footer/Footer';

const mainBackground = {
  background: `url('./images/background/background1.jpg') no-repeat fixed`,
  backgroundSize: 'cover',
};

const Home = () => {
  return (
    <>
      <div style={mainBackground}>
        <Navbar />
        <Carousel />
        <AnimalsList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
