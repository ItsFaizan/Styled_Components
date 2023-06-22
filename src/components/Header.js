import React from 'react';
import { Container } from './styles/Container.styled.js';
import { StyledHeader, Nav, Logo } from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';

 const Header = () => {
               
         return (

          <StyledHeader>
            <Container>
               <Nav>
                 <Logo src = './images/logo.svg' alt = 'logo'/>
                 <Button>Try It Free</Button>
              </Nav>
         
             </Container>
          </StyledHeader>

    )
 }

 export default Header;