import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.header)<{ bgColor?: string }>`
  position: sticky;
  top: 0;
  z-index: 3;
  transition: background 0.5s cubic-bezier(0.4, 0, 1, 1);
  background-color: #000;
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
`;

export const Logo = styled(motion.div)`
  img {
    width: 50px;
    border-radius: 0.5rem;
  }
`;

export const AccountWrapper = styled.div`
  .navbar-logout {
    background-color: #fff;
    color: #000;
  }
`;

export const StyledButton = styled(motion.button)`
  cursor: pointer;
  background-color: #004699;
  border: none;
  outline: none;
  padding: 0.5rem 0.8rem;
  color: #fff;
  border-radius: 0.4rem;
  margin: 0 0.2rem;

  :focus {
    color: red;
  }
  :active {
    color: black;
  }
`;
