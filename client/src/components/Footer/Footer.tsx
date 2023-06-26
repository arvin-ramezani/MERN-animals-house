import { FC } from 'react';
import { motion } from 'framer-motion';

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
} from './Footer.styled';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Logo>
            <img
              src={'./images/logo/logo.png'}
              alt='logo'
            />
          </Logo>
          <IconWrapper>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src='./images/icons/facebook.svg'
                alt=''
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src='./images/icons/twitter.svg'
                alt=''
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src='./images/icons/google-plus.svg'
                alt=''
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src='./images/icons/instagram.svg'
                alt=''
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src='./images/icons/pinterest.svg'
                alt=''
              />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src='./images/icons/youtube.svg'
                alt=''
              />
            </motion.li>
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
            <ul>
              <li>Affiliate Program</li>
              <li>Live Arrival Guarantee</li>
              <li>We Byu Animals</li>
              <li>Animals Payment Plan</li>
              <li>Animal Shipping And Other Shipping Policies</li>
              <li>Terms Of Service</li>
              <li>Privacy Statement</li>
            </ul>
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
              src='./images/icons/footer-secure.svg'
              alt=''
            />
          </li>
          <li>
            <img
              src='./images/icons/footer-ssl.svg'
              alt=''
            />
          </li>
          <li>
            <img
              src='./images/icons/footer-ssl-2.svg'
              alt=''
            />
          </li>
        </TopContent>
        <Copyright>© 2021 Copyright animalshouse</Copyright>
        <BottomContent>
          <li>
            <img
              src='./images/icons/footer-visa.svg'
              alt=''
            />
          </li>
          <li>
            <img
              src='./images/icons/footer-mc.svg'
              alt=''
            />
          </li>
          <li>
            <img
              src='./images/icons/footer-paypal.svg'
              alt=''
            />
          </li>
          <li>
            <img
              src='./images/icons/footer-amex.svg'
              alt=''
            />
          </li>
        </BottomContent>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
