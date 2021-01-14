import React, { createContext, useContext, useState, useEffect } from 'react';
import { TokenTypes } from '../types';

interface IGameContext {
  score: number;
  playerPick: TokenTypes | undefined;
  computerPick: TokenTypes | undefined;
  isBattleOn: boolean;
}

interface IProps {
  children: JSX.Element;
}

const GameContext = createContext<IGameContext>({} as IGameContext);
const GameActionsContext = createContext(
  {} as React.Dispatch<React.SetStateAction<IGameContext>>
);

export const useGameContext = () => useContext(GameContext);
export const useGameActionsContext = () => useContext(GameActionsContext);

export const GameContextProvider = ({ children }: IProps) => {
  const [gameValues, setGameValues] = useState<IGameContext>({
    score: 0,
    playerPick: undefined,
    computerPick: undefined,
    isBattleOn: false,
  });

  useEffect(() => {
    const gameScore = localStorage.getItem('gameScore');
    gameScore &&
      setGameValues((prevState) => {
        return {
          ...prevState,
          score: JSON.parse(gameScore) as number,
        };
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('gameScore', JSON.stringify(gameValues.score));
  }, [gameValues]);

  return (
    <GameContext.Provider value={gameValues}>
      <GameActionsContext.Provider value={setGameValues}>
        {children}
      </GameActionsContext.Provider>
    </GameContext.Provider>
  );
};
