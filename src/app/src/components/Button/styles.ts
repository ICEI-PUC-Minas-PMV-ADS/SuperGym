import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => disabled ? '#999' : '#25C26E'};
  border-radius: 5px;
  padding: 16px 24px;
  align-items: center;
`;
