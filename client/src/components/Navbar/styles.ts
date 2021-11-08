import styled from "styled-components";
// breakpoints
import { device } from "../../utils/breakpoints";

export const Wrapper = styled.header`
  background: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  padding: 1rem 0;

  img {
    width: 140px;

    @media ${device.tablet} {
      width: 180px;
    }
  }
`;

export const AccountWrapper = styled.div`
  .navbar-logout {
    background-color: #fff;
    color: #000;
  }
`;

export const StyledButton = styled.button`
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
