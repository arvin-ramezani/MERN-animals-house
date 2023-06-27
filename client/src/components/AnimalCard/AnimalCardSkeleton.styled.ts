import styled from 'styled-components';

import { device } from '../../utils/breakpoints';
import { motion } from 'framer-motion';

const skeletonBackgrounds = {
  main: '#004699',
  content: '#0174fc',
  shimmer: '#00469936',
};

const skeletonBorderRadius = {
  large: '0.5rem',
  small: '0.2rem',
};

export const StyledAnimalsListSkeleton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media ${device.mobileL} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 4rem 0;
  }
`;

export const StyledAnimalSkeleton = styled(motion.div)`
  background: ${skeletonBackgrounds.main};
  padding: 1rem 0.8rem 2rem;
  width: 100%;
  margin: 0;
  border-radius: ${skeletonBorderRadius.large};
  height: auto;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  z-index: 1;

  @media ${device.mobileL} {
    width: 430px;
  }

  @media ${device.tablet} {
    gap: 1rem;
    width: 300px;
  }

  @media ${device.laptop} {
    width: 430px;
    gap: 2rem;
  }
`;

export const AnimalCardHeader = styled.div`
  display: flex;
  gap: 1rem;

  & h3 {
    background-color: ${skeletonBackgrounds.content};
    border-radius: 0.2rem;
    width: 3rem;
    height: 1.7rem;
    margin: 0;
  }
`;

export const AnimalLikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  border: none;
  background: transparent;
  padding: 0;

  & img {
    border-radius: 0.2rem;
    width: 28px;
    height: 28px;
  }

  & span {
    height: 1.6rem;
    width: 2.6rem;
    background: ${skeletonBackgrounds.content};
    border-radius: 0.2rem;
  }
`;

export const ImageBlock = styled.div`
  padding: 0rem 1rem;
  height: auto;
  margin: 1rem auto;
  min-height: 134px;

  & img {
    width: 100%;
    border-radius: ${skeletonBorderRadius.large};
  }

  @media ${device.mobileL} {
    height: 200px;
  }

  @media ${device.tablet} {
    height: 160px;
  }

  @media ${device.laptop} {
    height: 235px;
  }
`;

export const DetailsText = styled.p`
  background: ${skeletonBackgrounds.content};
  height: 1rem;
  border-radius: 0.2rem;
  width: 50%;
`;

export const AboutBlock = styled.div``;

export const AboutTitle = styled.p`
  background: ${skeletonBackgrounds.content};
  width: 20%;
  height: 1.4rem;
  border-radius: 0.2rem;
`;

export const AboutText = styled.p`
  background: ${skeletonBackgrounds.content};
  width: 80%;
  height: 1rem;
  border-radius: 0.2rem;
  margin-left: 0.7rem;
`;

export const StyledShimmer = styled(motion.div)`
  position: absolute;
  background: ${skeletonBackgrounds.shimmer};
  top: -24px;
  left: -70px;
  width: 20%;
  height: 110%;
  transform: rotate(12deg);
`;
