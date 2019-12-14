import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Wrapper,
  LogoImage,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header() {
  const cartSize = 0;
  return (
    <Wrapper>
      <Container>
        <Logo onPress={() => {}}>
          <LogoImage name="shopping-basket" />
        </Logo>
        <BasketContainer onPress={() => {}}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
