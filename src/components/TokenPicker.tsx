import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled, { ThemeContext } from 'styled-components';
import { useGameActionsContext } from '../context/gameContext';
import GameToken from './GameToken';
import { getIconByName } from '../helpers/getIconComponent';
import Pentagon from '../assets/bg-pentagon.svg';
import { tokenPickerContainerVariants } from '../animations/variants';
import { tokenPickerSquareWrapperHover } from '../animations/hovers';
import { TokenTypes } from '../types';

interface ITokenPickerTokenWrapperProps {
  top?: string;
  left?: string;
  translateX?: string;
  translateY?: string;
}

const TokenPickerContainer = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 40px;
`;

const TokenPickerSquareWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: url(${Pentagon}) no-repeat;
  background-position: center;

  @media (max-width: ${(props) => props.theme.breakpoints.largeMobile}) {
    background-size: 80%;
  }
`;

const TokenPickerTokenWrapper = styled(
  motion.div
)<ITokenPickerTokenWrapperProps>`
  position: absolute;
  top: ${(props) => (props.top ? props.top : 0)};
  left: ${(props) => (props.left ? props.left : 0)};
  width: 150px;
  transform: translate(
    ${(props) => (props.translateX ? props.translateX : 0)},
    ${(props) => (props.translateY ? props.translateY : 0)}
  );
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.largeMobile}) {
    width: 120px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.extraSmallMobile}) {
    width: 80px;
  }
`;

const wrappersPositions = [
  {
    left: '50%',
    translateX: '-50%',
    translateY: '0',
  },
  {
    top: '43%',
    left: '100%',
    translateX: '-100%',
    translateY: '-50%',
  },
  {
    top: '100%',
    left: '70%',
    translateX: '-50%',
    translateY: '-100%',
  },
  {
    top: '100%',
    left: '30%',
    translateX: '-50%',
    translateY: '-100%',
  },
  {
    top: '43%',
    translateX: '0',
    translateY: '-50%',
  },
];

const TokenPicker = () => {
  const { gradients } = useContext(ThemeContext);
  const setGameValue = useGameActionsContext();

  const gradientsArray = Object.entries(gradients);

  const pickToken = (tokenType: TokenTypes): void => {
    setGameValue((prevState) => {
      return {
        ...prevState,
        playerPick: tokenType,
        isBattleOn: true,
      };
    });
  };

  return (
    <TokenPickerContainer
      variants={tokenPickerContainerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <TokenPickerSquareWrapper>
        {wrappersPositions.map(
          (wrapper: ITokenPickerTokenWrapperProps, index: number) => (
            <TokenPickerTokenWrapper
              key={`${gradientsArray[index][0]}-token-wrapper`}
              top={wrapper.top}
              left={wrapper.left}
              translateX={wrapper.translateX}
              translateY={wrapper.translateY}
              variants={tokenPickerSquareWrapperHover}
              whileHover='hover'
              whileTap='tap'
              onClick={() => pickToken(gradientsArray[index][0] as TokenTypes)}
            >
              <GameToken
                key={`${gradientsArray[index][0]}-token`}
                background={gradientsArray[index][1] as string}
                icon={getIconByName(gradientsArray[index][0] as TokenTypes)}
              ></GameToken>
            </TokenPickerTokenWrapper>
          )
        )}
      </TokenPickerSquareWrapper>
    </TokenPickerContainer>
  );
};

export default TokenPicker;
