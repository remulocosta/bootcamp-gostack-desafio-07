import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <>
          <FlatList
            horizontal
            data={products}
            extraData={this.props}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Product key={item.id}>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <AddButton onPress={() => {}}>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <ProductAmountText>{0 || 0}</ProductAmountText>
                  </ProductAmount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </Product>
            )}
          />
        </>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Main Page',
};

export default Main;
