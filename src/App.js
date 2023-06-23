import React from 'react';
import Header from './components/Header.js'
import { ThemeProvider } from 'styled-components';
import  GlobalStyles  from './components/styles/Global.js';
import { Container } from './components/styles/Container.styled.js';
import Card from './components/Card.js';
import content from './content.js';
import Footer from './components/Footer.js';
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
  <Container>
    {content.map((item, index)=>(
        <Card key={index} item={item} />
    ))}
  </Container>
  <Footer/>
  </>
  </ThemeProvider>
 );
};
export default App;
