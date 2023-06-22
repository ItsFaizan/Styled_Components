import React from 'react';
import Header from './components/Header.js'
import { ThemeProvider } from 'styled-components';
import  GlobalStyles  from './components/styles/Global.js';

const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }
const App = () => {
 return (
    <ThemeProvider theme={theme}>
  <>
  <GlobalStyles />
  <Header />
  </>
  </ThemeProvider>
 );
};
export default App;
