import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Wrapper = styled.div`
  margin-top: 3rem;
`;

export const FilterWrapper = styled.div`
  background-color: #bedd67;
  padding: 0.4rem;
  position: sticky;
  top: 0;
  z-index: 2;

  @media ${device.mobileL} {
    top: 0;
    display: flex;
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

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin-top: 2rem;
  position: relative;

  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5rem;
  }
`;

export const Card = styled.div`
  padding: 1rem 0.8rem;
  background-color: #004699;
  color: #eaeaea;
  margin: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;

  .text-container {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .text-sm {
    font-size: 0.8rem;
    font-weight: normal;
    margin-left: 0.5rem;
  }

  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 25%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  align-items: baseline;
  gap: 1.2rem;

  h3 {
    margin: 0;
  }

  span {
    font-weight: 100;
  }
`;

export const CardImg = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 240px;
  margin: 1rem auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBody = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;

  p {
    margin: 0;
    letter-spacing: 1px;
  }
`;

export const OpenIcon = styled.div`
  cursor: pointer;
`;

export const CardFooter = styled.div`
  padding-top: 0.5rem;
  .footer-text-bg {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
  .footer-text-sm {
    font-size: 0.8rem;
    font-weight: normal;
    margin-left: 0.5rem;
    padding-top: 0.6rem;
    line-height: 1.4rem;
    letter-spacing: 1px;
  }
`;

// Framer Motion Variants
export const variants = {
  open: { scale: 1.1 },
  close: { y: -100, opacity: 0 },
};
