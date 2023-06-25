import React, { FC } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import { desktopSlides } from '../../dummyData/slides';
import { Wrapper } from './styles';

import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel: FC = () => {
  return (
    <Wrapper>
      <AutoplaySlider
        // play
        cancelOnInteraction={false}
        media={desktopSlides}
      />
    </Wrapper>
  );
};

export default Carousel;
