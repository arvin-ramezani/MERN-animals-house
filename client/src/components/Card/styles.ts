import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { StyledButton as Button } from "../Navbar/styles";
import { ICardStyledComponentsProps as IIsOpen } from "../../interfaces/interfaces";

export const Wrapper = styled.div<IIsOpen>`
  position: ${({ open }) => (open ? "fixed" : "relative")};
  top: ${({ open }) => (open ? "0%" : "0")};
  padding: 1rem 0.8rem 2rem;
  width: 80%;
  background-color: #004699;
  color: #eaeaea;
  margin: 0.5rem 1rem;
  border-radius: 5px;
  height: auto;
  z-index: ${({ open }) => open && 2};

  transition: all 0.2s;
  box-shadow: ${({ open }) => (open ? "0px 0px 32px 4px #106ddb" : "none")};

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

  @media ${device.mobileL} {
    transform: ${({ open }) => (open ? "scale(1.5, 1.2)" : "scale(1)")};
    width: ${({ open }) => (open ? "auto" : "430px")};
  }

  @media ${device.tablet} {
    display: ${({ open }) => (open ? "flex" : "block")};
    align-items: center;
    gap: 1rem;
    width: ${({ open }) => (open ? "80%" : "430px")};
    top: ${({ open }) => (open ? "30%" : "0")};
  }

  @media ${device.laptop} {
    width: ${({ open }) => (open ? "992px" : "430px")};
    gap: 2rem;
  }
`;

export const CardHeader = styled.div<IIsOpen>`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  align-items: baseline;
  align-self: flex-start;
  gap: 0.4rem;

  @media ${device.tablet} {
    flex-direction: ${({ open }) => (open ? "column" : "row")};
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
    position: ${({ open }) => (open ? "absolute" : "static")};
    bottom: 0.5rem;
    left: 4rem;
    color: #bedd67;
    margin-left: auto;
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
  padding: 1rem 0;
  width: 100%;
  height: 240px;
  margin: 1rem auto;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBody = styled.div<IIsOpen>`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  border-top: 1px solid;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  align-self: center;

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
  width: 100%;
  cursor: pointer;
  height: ${({ open }) => (open ? "100%" : "5rem")};

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
export const variants = {
  open: {
    rotate: [0, 360, 360, 360],
  },
  closed: { scale: 1, rotate: 0 },
};
