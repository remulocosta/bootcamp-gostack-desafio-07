import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #1919;
  flex-direction: row;
`;
export const Container = styled.View`
  flex: 1;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  padding-top: 20px;
  background: #333;
  color: #fff;
`;

export const Logo = styled.TouchableWithoutFeedback`
  width: 185px;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
