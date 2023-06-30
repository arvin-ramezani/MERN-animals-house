import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import {
  Wrapper,
  Container,
  Logo,
  AccountWrapper,
  StyledButton,
} from './Navbar.styled';
import { useAppSelector } from '../../app/Hook';
import { persistor } from '../../app/store';
import { selectUser } from '../../features/user/userSlice';
import { authButtonVariants } from './Navbar.variants';

const Navbar: FC = () => {
  const { userInfo } = useAppSelector(selectUser);
  const { scrollY } = useViewportScroll();
  const bgColor = useTransform(scrollY, [0, 50], ['#000000', '#000000b3']);

  const logoutHandler = () => {
    persistor.purge();
  };

  return (
    <Wrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      style={{ backgroundColor: bgColor }}
    >
      <Container>
        <Logo>
          <Link to='/'>
            <motion.img
              whileHover={{ rotate: 360, scale: 0.8 }}
              src={'./images/logo/animals-house-logo.svg'}
              alt='logo'
            />
          </Link>
        </Logo>
        <AccountWrapper>
          {userInfo ? (
            <StyledButton
              variants={authButtonVariants}
              whileHover={'hover'}
              whileTap={'tap'}
              className='navbar-logout'
              onClick={logoutHandler}
            >
              Logout
            </StyledButton>
          ) : (
            <>
              <Link to='/login'>
                <StyledButton
                  variants={authButtonVariants}
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  Login
                </StyledButton>
              </Link>
              <Link to='/register'>
                <StyledButton
                  variants={authButtonVariants}
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  Register
                </StyledButton>
              </Link>
            </>
          )}
        </AccountWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
