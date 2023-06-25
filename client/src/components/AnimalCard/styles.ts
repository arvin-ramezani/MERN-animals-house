import styled from 'styled-components';
import { device } from '../../utils/breakpoints';
import { StyledButton as Button } from '../Navbar/styles';
import { ICardStyledComponentsProps as IIsOpen } from '../../interfaces/interfaces';
import { Variants, motion } from 'framer-motion';

export const AnimalCardBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const Wrapper = styled.div<IIsOpen>`
  padding: 1rem 0.8rem 2rem;
  width: 80%;
  background-color: #004699;
  color: #eaeaea;
  margin: 0.5rem 1rem;
  border-radius: 5px;
  height: auto;
  transition: all 0.2s;
  overflow-y: auto;

  cursor: ${({ open }) => (open ? 'default' : 'pointer')};
  position: ${({ open }) => (open ? 'fixed' : 'relative')};
  top: ${({ open }) => (open ? '50%' : '0')};
  z-index: ${({ open }) => open && 2};
  box-shadow: ${({ open }) => (open ? '0px 0px 16px 4px #106ddb' : 'none')};

  .text-container {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
  }

  .text-sm {
    font-size: 0.8rem;
    font-weight: normal;
    margin-left: 0.5rem;
  }

  @media ${device.mobileL} {
    transform: ${({ open }) => (open ? 'scale(1.5, 1.2)' : 'scale(1)')};
    width: ${({ open }) => (open ? 'auto' : '430px')};
  }

  @media ${device.tablet} {
    gap: 1rem;

    display: ${({ open }) => (open ? 'flex' : 'block')};
    width: ${({ open }) => (open ? '80%' : '300px')};
    height: ${({ open }) => (open ? 'fit-content' : 'auto')};
  }

  @media ${device.laptop} {
    width: ${({ open }) => (open ? '992px' : '430px')};
    gap: 2rem;
  }
`;

export const CardHeader = styled.div<IIsOpen>`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  align-items: center;
  align-self: flex-start;
  gap: 0.4rem;
  flex: 1;

  @media ${device.tablet} {
    flex-direction: ${({ open }) => (open ? 'column' : 'row')};
  }

  h3 {
    margin: 0;
  }

  span {
    font-weight: 100;
  }

  .card-closeButton {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  div.card-like {
    color: #bedd67;
    cursor: 'pointer';
    display: flex;
    align-items: center;
    font-weight: 400;

    svg {
      margin: 0 0.4rem 0 0;
      font-size: 1.4rem;
    }
  }
`;

export const CloseButton = styled(Button)`
  margin-left: auto;
  border: 1px solid;
  border-radius: 5px;
  background: #bedd67;
  color: black;
`;

export const CardImg = styled.div`
  padding: 0rem 1rem;
  height: auto;
  margin: 1rem auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }

  @media ${device.tablet} {
    height: auto;
  }
`;

export const CardBody = styled.div<IIsOpen>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  height: fit-content;
  gap: 1rem;
  padding-bottom: 0.5rem;
  position: relative;
  transition: 0.5s;
  flex: 3;

  border-bottom: ${({ open }) => !open && '1px solid'};

  p {
    margin: 0;
    letter-spacing: 1px;
  }
`;

export const OpenIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CardFooter = styled.div<IIsOpen>`
  padding: 0.5rem 0 0 0;
  overflow: hidden;
  flex: 2;

  .footer-text-bg {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
  .footer-text-sm {
    font-size: 0.8rem;
    font-weight: normal;
    margin-left: 0.5rem;
    line-height: 1.4rem;
    letter-spacing: 1px;
    transition: all 0.5s;
  }

  .read-more-text {
    color: #ccc;
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    font-size: 0.8rem;
    color: #bedd67;
  }
`;

// Framer Motion Variants
export const variants: Variants = {
  open: {
    rotate: [0, 360, 360, 360],
    // transform: 'translateY(-50%)',
    y: '-50%',
    height: '70%',
  },
  closed: { scale: 1, rotate: 0, y: 0, height: 'auto' },
};
