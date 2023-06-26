import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
import { Variants } from 'framer-motion';

const styledButtonVariants: Variants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

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
            <img
              src={'./images/logo/logo.png'}
              alt='logo'
            />
          </Link>
        </Logo>
        <AccountWrapper>
          {userInfo ? (
            <StyledButton
              variants={styledButtonVariants}
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
                  variants={styledButtonVariants}
                  whileHover={'hover'}
                  whileTap={'tap'}
                >
                  Login
                </StyledButton>
              </Link>
              <Link to='/register'>
                <StyledButton
                  variants={styledButtonVariants}
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
