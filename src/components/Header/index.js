import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Wrapper } from './styles';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Icon name="shopping-basket" size={36} color="#FFF" />
        <Icon name="shopping-basket" size={36} color="#FFF" />
      </Container>
    </Wrapper>
  );
}

export default Header;
