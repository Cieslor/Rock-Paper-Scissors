import React, { createContext, useContext, useState, useEffect } from 'react';

interface IGameContext {
  score: number;
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
  });

  useEffect(() => {
    const gameData = localStorage.getItem('gameData');
    gameData && setGameValues(JSON.parse(gameData));
  }, []);

  useEffect(() => {
    localStorage.setItem('gameData', JSON.stringify(gameValues));
  }, [gameValues]);

  return (
    <GameContext.Provider value={gameValues}>
      <GameActionsContext.Provider value={setGameValues}>
        {children}
      </GameActionsContext.Provider>
    </GameContext.Provider>
  );
};
