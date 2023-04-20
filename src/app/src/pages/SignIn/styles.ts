import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #25C26E;
;
`;

export const Content = styled.View`
  margin-top: 113px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Message = styled.View`
  margin-top: 48px;
  margin-bottom: 20px;
`;

export const FieldContainer = styled.View`
  margin: 24px;
`;

export const ButtonContainer = styled.View`
  margin: 100px;
`;
