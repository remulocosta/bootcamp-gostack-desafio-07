import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import {
  Container,
  ContainerCart,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const total = 'R$ 500,00';
  const products = [
    {
      id: 1,
      image:
        'https://static.netshoes.com.br/produtos/kit-3-pares-de-sapatenis-sapatofran-sw-masculino/56/HAP-0151-256/HAP-0151-256_detalhe2.jpg?ims=326x',
      title:
        'Kit 3 Pares de Sapatênis SapatoFran SW Masculino - Preto e Marrom',
      priceFormatted: 'R$ 123,00',
      amount: 2,
      subtotal: 'R$ 256,00',
    },
    {
      id: 2,
      image:
        'https://static.netshoes.com.br/produtos/sapatenis-polo-joy-confortavel-masculino/78/FSO-0059-178/FSO-0059-178_detalhe2.jpg?ims=326x',
      title: 'Sapatênis Polo Joy Confortável Masculino - Preto e Amarelo',
      priceFormatted: 'R$ 122,00',
      amount: 2,
      subtotal: 'R$ 254,00',
    },
  ];

  return (
    <Container>
      <ContainerCart>
        {products.length ? (
          <>
            <Products>
              {products.map(product => (
                <Product key={product.id}>
                  <ProductInfo>
                    <ProductImage source={{ uri: product.image }} />
                    <ProductDetails>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{product.priceFormatted}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete onPress={() => {}}>
                      <Icon
                        name="delete-forever"
                        size={24}
                        color={colors.primary}
                      />
                    </ProductDelete>
                  </ProductInfo>
                  <ProductControls>
                    <ProductControlButton onPress={() => {}}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductAmount value={String(product.amount)} />
                    <ProductControlButton onPress={() => {}}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color={colors.primary}
                      />
                    </ProductControlButton>
                    <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                  </ProductControls>
                </Product>
              ))}
            </Products>
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{total}</TotalAmount>
              <Order>
                <OrderText>FINALIZAR PEDIDO</OrderText>
              </Order>
            </TotalContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </ContainerCart>
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'Cart Page',
};
