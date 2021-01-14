import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled, { ThemeContext } from 'styled-components';
import {
  slideInFromLeft,
  slideInFromRight,
  fadeInVariants,
} from '../animations/variants';
import { getIconByName } from '../helpers/getIconComponent';
import { useGameContext } from '../context/gameContext';
import { getRandomToken } from '../helpers/getRandomToken';
import { getBattleResult } from '../helpers/getBattleResult';
import { TokenTypes } from '../types';
import GameToken from './GameToken';

const BattleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding-top: 40px;
  margin: 0 auto;
`;
const BattleSide = styled.div`
  width: 33%;
`;
const SideTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SideTitle = styled(motion.p)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
`;

const SideTokenSquareWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-top: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    min-width: 120px;
    min-height: 120px;
    background: ${(props) => props.theme.colors.battleTokenPlaceholder};
    border-radius: 50%;
    opacity: 0.2;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const SideTokenContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Battle = () => {
  const { playerPick } = useGameContext();
  const { gradients } = useContext(ThemeContext);

  const housePick: TokenTypes = getRandomToken();

  return (
    <BattleContainer>
      <BattleSide>
        <SideTitleContainer>
          <SideTitle
            variants={fadeInVariants}
            initial='hidden'
            animate='visible'
          >
            You picked
          </SideTitle>
        </SideTitleContainer>
        <SideTokenSquareWrapper variants={fadeInVariants}>
          <SideTokenContainer
            variants={slideInFromLeft}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1 }}
          >
            <GameToken
              background={playerPick && gradients[playerPick]}
              icon={playerPick && getIconByName(playerPick)}
            />
          </SideTokenContainer>
        </SideTokenSquareWrapper>
      </BattleSide>
      <BattleSide>
        <SideTitleContainer>
          <SideTitle
            variants={fadeInVariants}
            initial='hidden'
            animate='visible'
          >
            The house picked
          </SideTitle>
        </SideTitleContainer>
        <SideTokenSquareWrapper variants={fadeInVariants}>
          <SideTokenContainer
            variants={slideInFromRight}
            initial='hidden'
            animate='visible'
          ></SideTokenContainer>
        </SideTokenSquareWrapper>
      </BattleSide>
    </BattleContainer>
  );
};

export default Battle;
