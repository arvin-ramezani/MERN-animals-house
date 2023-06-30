import { FC } from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../hooks/useScrollToTop';

const Layout: FC = ({ children }) => {
  useScrollToTop();

  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
