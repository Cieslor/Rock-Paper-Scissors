import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './helpers/mainTheme';
import MainWrapper from './components/MainWrapper';
import Rules from './components/Rules';

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className='App'>
        <MainWrapper>
          <Rules />
        </MainWrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
