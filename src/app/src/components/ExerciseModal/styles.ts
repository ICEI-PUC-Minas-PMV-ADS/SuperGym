import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0,0,0, .5);
  border-radius: 16px;
  align-items: center;
  justify-content:center;
  margin: 24px;
`;

export const ModalBody = styled.View`
  flex: 1;
  padding: 32px 24px 0px
`;

export const Header = styled.View``;

export const InstructionsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 16px
`;

export const AditionalInfos = styled.View`
  flex-direction: row;
`;

export const Instructions = styled.View`
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 16px;
  margin-top: 16px;
  flex: 1;
`;

