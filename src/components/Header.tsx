import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Logo from '../assets/logo-bonus.svg';
import Score from './Score';

const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  max-width: 750px;
  margin: 0 auto;
  padding: 20px 25px;
  border: 2px solid ${(props) => props.theme.colors.headerOutline};
  border-radius: ${(props) => props.theme.utils.borderRadius};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 15px;
    max-height: 120px;
  }
`;

const GameLogo = styled.img`
  display: flex;
  object-fit: contain;
  object-position: 0 50%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <GameLogo src={Logo} />
      <Score />
    </HeaderContainer>
  );
};

export default Header;
