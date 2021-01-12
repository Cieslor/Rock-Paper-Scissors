import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GameContextProvider } from './context/gameContext';
import { mainTheme } from './helpers/mainTheme';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import Rules from './components/Rules';

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GameContextProvider>
        <div className='App'>
          <MainWrapper>
            <Header />
            <Rules />
          </MainWrapper>
        </div>
      </GameContextProvider>
    </ThemeProvider>
  );
};

export default App;
