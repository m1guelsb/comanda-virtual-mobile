import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 12px 24px;

  background-color: ${({ disabled }) => (disabled ? '#999' : '#d73035')};
  border-radius: 48px;
`;
