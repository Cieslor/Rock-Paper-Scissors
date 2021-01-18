import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled, { ThemeContext } from "styled-components";
import {
  slideInFromLeft,
  slideInFromRight,
  fadeInVariants,
  containerFlyInVariants,
} from "../animations/variants";
import { getIconByName } from "../helpers/getIconComponent";
import { useGameContext, useGameActionsContext } from "../context/gameContext";
import { getRandomToken } from "../helpers/getRandomToken";
import { getBattleResult } from "../helpers/getBattleResult";
import { BattleResultsTypes } from "../types";
import { BattleResults, BattleResultsTexts, PLAY_AGAIN } from "../constants";
import GameToken from "./GameToken";
import { PrimaryButton } from "./Buttons/Buttons";

interface IResultContainerProps {
  flex: string;
}

const BattleContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding-top: 40px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const BattleSide = styled(motion.div)`
  width: 33%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 48%;
  }
`;
const SideTitleContainer = styled.div`
  min-height: 60px;
  text-align: center;
  margin-bottom: 10px;
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
    content: "";
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

const ResultContainer = styled(motion.div)<IResultContainerProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex};
  min-width: 50px;
  padding-top: 70px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    order: 3;
  }
`;

const ResultText = styled(motion.p)`
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.white};
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
`;

const getResultText = (result: BattleResultsTypes): string => {
  return BattleResultsTexts[result];
};

const Battle = () => {
  const { playerPick, housePick } = useGameContext();
  const setGameValues = useGameActionsContext();
  const { gradients } = useContext(ThemeContext);

  const [battleResult, setBattleResult] = useState<
    BattleResultsTypes | undefined
  >(undefined);

  const playAgain = () => {
    setGameValues((prevState) => {
      return {
        ...prevState,
        isBattleOn: false,
        playerPick: undefined,
        housePick: undefined,
      };
    });
  };

  useEffect(() => {
    setGameValues((prevState) => {
      return {
        ...prevState,
        housePick: getRandomToken(),
      };
    });
  }, [setGameValues]);

  useEffect(() => {
    !!playerPick &&
      !!housePick &&
      setTimeout(() => {
        setBattleResult(getBattleResult(playerPick, housePick));
      }, 3000);
  }, [playerPick, housePick]);

  useEffect(() => {
    if (!!battleResult) {
      if (battleResult === BattleResults.playerWon) {
        setGameValues((prevState) => {
          return {
            ...prevState,
            score: prevState.score + 1,
          };
        });
        return;
      } else if (battleResult === BattleResults.houseWon) {
        setGameValues((prevState) => {
          return {
            ...prevState,
            score: prevState.score !== 0 ? prevState.score - 1 : 0,
          };
        });
        return;
      }
    }
  }, [battleResult, setGameValues]);

  return (
    <BattleContainer
      layout
      variants={containerFlyInVariants}
      initial={false}
      animate="visible"
      exit="hidden"
    >
      <BattleSide layout>
        <SideTitleContainer>
          <SideTitle
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            You picked
          </SideTitle>
        </SideTitleContainer>
        <SideTokenSquareWrapper variants={fadeInVariants}>
          <SideTokenContainer
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
          >
            <GameToken
              background={playerPick && gradients[playerPick]}
              icon={playerPick && getIconByName(playerPick)}
            />
          </SideTokenContainer>
        </SideTokenSquareWrapper>
      </BattleSide>
      <ResultContainer layout flex={!!battleResult ? "1" : "0"}>
        {!!battleResult && (
          <>
            <ResultText
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              {getResultText(battleResult)}
            </ResultText>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.25 }}
            >
              <PrimaryButton onClick={() => playAgain()}>
                {PLAY_AGAIN}
              </PrimaryButton>
            </motion.div>
          </>
        )}
      </ResultContainer>
      <BattleSide layout>
        <SideTitleContainer>
          <SideTitle
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            The house picked
          </SideTitle>
        </SideTitleContainer>
        <SideTokenSquareWrapper variants={fadeInVariants}>
          <SideTokenContainer
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2, duration: 0.6, type: "spring" }}
          >
            <GameToken
              background={housePick && gradients[housePick]}
              icon={housePick && getIconByName(housePick)}
            />
          </SideTokenContainer>
        </SideTokenSquareWrapper>
      </BattleSide>
    </BattleContainer>
  );
};

export default Battle;
