import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const logoutHandler = () => {
    persistor.purge();
  };

  return (
    <Wrapper>
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
