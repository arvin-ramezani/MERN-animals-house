import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import AnimalsList from '../../components/AnimalsList/AnimalsList';
import Footer from '../../components/Footer/Footer';

const mainBackground = {
  background: `url(https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat fixed `,
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
