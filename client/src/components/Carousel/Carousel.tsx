import React, { FC } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";
import { desktopSlides } from "../../dummyData/slides";
import { device } from "../../utils/breakpoints";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Wrapper = styled.div`
  margin: 4rem auto 0;

  @media ${device.mobileL} {
    width: 60vw;
  }
`;

const Carousel: FC = () => {
  return (
    <Wrapper>
      <AutoplaySlider play cancelOnInteraction={false} media={desktopSlides} />
    </Wrapper>
  );
};

export default Carousel;
