import styled from 'styled-components';

import { device } from '../../utils/breakpoints';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 3rem 0;

  .awssld__bullets button {
    width: 8px !important;
    height: 8px !important;
  }

  .awssld__controls button .awssld__controls__arrow-left,
  .awssld__controls button .awssld__controls__arrow-right {
    opacity: 1 !important;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    background-color: #fff !important;
  }

  @media ${device.mobileL} {
    width: 60vw;
  }
`;
