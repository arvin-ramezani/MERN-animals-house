import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Logo,
  AccountWrapper,
  StyledButton,
} from './styles';
import { useAppSelector } from '../../app/Hook';
import { persistor } from '../../app/store';
import { selectUser } from '../../features/user/userSlice';

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
              className='navbar-logout'
              onClick={logoutHandler}
            >
              Logout
            </StyledButton>
          ) : (
            <>
              <Link to='/login'>
                <StyledButton>Login</StyledButton>
              </Link>
              <Link to='/register'>
                <StyledButton>Register</StyledButton>
              </Link>
            </>
          )}
        </AccountWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
