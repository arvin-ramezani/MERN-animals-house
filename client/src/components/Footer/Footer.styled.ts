import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const Wrapper = styled.footer`
  background-color: #000;
  color: #fff;

  li {
    list-style-type: none;
    cursor: pointer;
  }

  p {
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;

export const Container = styled.div`
  padding: 0.8rem 1.2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 150px;
  margin: auto;

  img {
    border-radius: 5rem;
    width: 100%;
  }

  @media ${device.tablet} {
    margin: 0;
    width: 240px;
  }
`;

export const IconWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  padding: 0.8rem 2rem;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  h6 {
    font-size: 1.8rem;
    font-weight: normal;
    margin: 0.6rem 0;
  }

  & > div {
    background-color: #171717;
    padding: 0.8rem 0.8rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > div {
      width: 30%;
    }
  }
`;

export const Address = styled.div`
  background-color: #171717;
  padding: 0.8rem 0.8rem;
`;

export const Browse = styled.div`
  li {
    margin: 0.4rem 0;
    transition: 0.3s;
    font-size: 0.8rem;
    letter-spacing: 1px;
    &:hover {
      color: #bedd67;
    }
  }
`;

export const About = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;
  background-color: #171717;
  padding: 1.6rem 0.6rem;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const TopContent = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

export const Copyright = styled.p`
  margin: 0;
`;

export const BottomContent = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 2rem;
`;
