import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Text>Main Page</Text>
      <Icon name="add" size={20} color="#333" />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Main Page',
};
