import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`

  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #fafafa;
;
`;

export const Content = styled.View`
  margin: 24px 24px 0px 24px;
  width: 100%;
  max-width: 280px;
`;

export const ButtonContainer = styled.View`
  margin: 24px;
  position: absolute;
  top: 80%;
  left: 20%;
`;

export const Image = styled.Image`
position: absolute;
top: 30%;
left: 7%;
width: 370px;
height: 510px;
`;
