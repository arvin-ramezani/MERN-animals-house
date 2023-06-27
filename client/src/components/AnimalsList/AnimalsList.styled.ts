import { motion } from 'framer-motion';
import styled from 'styled-components';

import { device } from '../../utils/breakpoints';

export const Wrapper = styled.div`
  margin-top: 3rem;
`;

export const FilterWrapper = styled.div`
  background-color: #bedd67;
  padding: 0.4rem;
  position: sticky;
  top: 86px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    top: 0;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterButton = styled(motion.button)`
  cursor: pointer;
  background-color: #004699;
  border: none;
  outline: none;
  padding: 0.5rem 0.8rem;
  color: #fff;
  border-radius: 0.4rem;
  margin: 0.2rem;
  position: relative;

  &:focus {
    opacity: 0.8;
  }
`;

export const Search = styled.div`
  margin-top: 0.5rem;

  label {
    font-size: 0.8rem;
    margin: 0.2rem;
    display: block;
  }

  input {
    outline: none;
    border: 1px solid;
    border-radius: 5px;
    padding: 0.5rem 0.6rem;
  }

  button {
    background-color: #305b15;
  }
`;

export const AnimalsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem 0;
  }
`;

export const LoadMoreBlock = styled.div`
  width: 100%;
  text-align: center;
`;
