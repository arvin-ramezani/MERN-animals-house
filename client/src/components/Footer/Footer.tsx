import React, { FC } from "react";
import LogoImg from "../../images/logo/logo.png";
import {
  Wrapper,
  Container,
  Top,
  Logo,
  IconWrapper,
  Main,
  Address,
  Browse,
  About,
  Bottom,
  TopContent,
  Copyright,
  BottomContent,
} from "./styles";

const Footer: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Logo>
            <img src={LogoImg} alt="logo" />
          </Logo>
          <IconWrapper>
            <li>
              <img
                src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/facebook-logo.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/twitter.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/google-plus.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/instagram.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/pinterest.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/youtube.png"
                alt=""
              />
            </li>
          </IconWrapper>
        </Top>
        <Main>
          <Address>
            <h6>Address</h6>
            <p>17021 South Dixie Hwy. Ste A Palmetto Bay, FL 33157</p>
            <p>info@animalshouse.com</p>
          </Address>
          <Browse>
            <h6>Browse</h6>
            <li>Affiliate Program</li>
            <li>Live Arrival Guarantee</li>
            <li>We Byu Animals</li>
            <li>Animals Payment Plan</li>
            <li>Animal Shipping And Other Shipping Policies</li>
            <li>Terms Of Service</li>
            <li>Privacy Statement</li>
          </Browse>
          <About>
            <h6>About AnimalsHouse</h6>
            <p>
              XYZReptiles is the cumulative effort of over 35 years of
              herpetology and marketing experience. We have a love for the
              animals and an eye for detail and have combined these traits to
              bring our customers a great reptile buying and keeping experience.
            </p>
          </About>
        </Main>
      </Container>
      <Bottom>
        <TopContent>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/secure.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/ssl.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/ssl-icon.png"
              alt=""
            />
          </li>
        </TopContent>
        <Copyright>© 2021 Copyright animalshouse</Copyright>
        <BottomContent>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/cc_visa.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/cc_mc.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/cc_paypal.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.xyzreptiles.com/wp-content/themes/xyzreptiles/assets/images/cc_amex.png"
              alt=""
            />
          </li>
        </BottomContent>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
