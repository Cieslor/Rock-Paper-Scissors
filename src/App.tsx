import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { GameContextProvider, useGameContext } from './context/gameContext';
import { mainTheme } from './helpers/mainTheme';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import Rules from './components/Rules';
import TokenPicker from './components/TokenPicker';
import Battle from './components/Battle';

const AppContent = () => {
  const { isBattleOn } = useGameContext();

  return (
    <div className='App'>
      <MainWrapper>
        <Header />
        <AnimatePresence exitBeforeEnter>
          {!isBattleOn && <TokenPicker key='tokenPicker' />}
          {isBattleOn && <Battle key='battle' />}
        </AnimatePresence>
        <Rules />
      </MainWrapper>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GameContextProvider>
        <AppContent />
      </GameContextProvider>
    </ThemeProvider>
  );
};

export default App;
