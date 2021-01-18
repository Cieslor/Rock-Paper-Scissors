import React from 'react';
import styled from 'styled-components';

interface IGameTokenContainerProps {
  background: string;
}

interface IGameTokenProps {
  background: string;
  icon: string | undefined;
}

const GameTokenContainer = styled.div<IGameTokenContainerProps>`
  position: relative;
  width: 98%;
  padding-top: 100%;
  background: ${(props) => props.background};
  border-radius: 50%;
`;

const GameTokenInner = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  width: 75%;
  padding-top: 75%;
  background: ${(props) => props.theme.colors.tokenInnerBackground};
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const GameTokenIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 50%;
  transform: translate(-50%, -50%);
`;

const GameToken = ({ background, icon }: IGameTokenProps) => {
  return (
    <GameTokenContainer background={background}>
      <GameTokenInner>
        <GameTokenIcon src={icon} />
      </GameTokenInner>
    </GameTokenContainer>
  );
};

export default GameToken;
