import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #fafafa;
;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const ExercisesContainer = styled.View`
  height: 50px;
  flex: 1;
`;

export const Footer = styled.View`
  background: white;
  min-height: 110px;
`;

export const FooterContainer = styled.SafeAreaView`
`;


export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
