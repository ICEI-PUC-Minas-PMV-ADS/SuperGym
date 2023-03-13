import styled from 'styled-components/native';

export const ExerciseContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 5px;
`;


export const ExerciseDetails = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204,204,204,0.3);
  margin: 24px 0;
`;
