import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useGameContext } from '../context/gameContext';
import { fadeInVariants } from '../animations/variants';

const ScoreContainer = styled.div`
  width: 100%;
  max-width: 150px;
  padding: 10px 0;
  text-align: center;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.utils.borderRadius};
`;

const ScoreText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.scoreBlue};
  text-transform: uppercase;
`;

const ScoreNumber = styled(motion.p)`
  font-size: 60px;
  color: ${(props) => props.theme.colors.dark};
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`;

const Score = () => {
  const { score } = useGameContext();

  return (
    <ScoreContainer>
      <ScoreText>Score</ScoreText>
      <ScoreNumber
        variants={fadeInVariants}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.5 }}
      >
        {score}
      </ScoreNumber>
    </ScoreContainer>
  );
};

export default Score;
