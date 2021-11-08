import styled from "styled-components";
import BgImage from "../../images/background/registration-background.jpg";
import { device } from "../../utils/breakpoints";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url(${BgImage}) no-repeat fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin: auto;
`;
export const FormContainer = styled.form`
  border-radius: 0.2rem;
  background-color: #1ac913;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.4rem;
  width: 300px;
  margin: auto;

  @media ${device.tablet} {
    width: 500px;
  }
`;
export const Input = styled.div`
  margin: 0.5rem auto;
  width: 240px;

  label {
    display: block;
    font-size: 0.8rem;
    margin: 0 0 0.2rem 0.4rem;
  }

  input {
    border: 2px solid #06a100;
    border-radius: 0.4rem;
    padding: 0.2rem 0.4rem;
    height: 1.6rem;
    outline: none;
    width: 100%;
  }

  .password-input {
    position: relative;
    display: inline-block;
    width: 240px;
  }
`;

export const HelperText = styled.span`
  font-weight: bold;
  display: block;
  font-size: 0.8rem;
  margin: 0.2rem 0 0 0.6rem;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const LoginLink = styled.span`
  color: #305b15;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2rem;
`;
