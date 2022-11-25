import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.View`
  border-radius: 8px;
  background-color: #fafafa;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const Form = styled.View`
  display: flex;
`;

export const Input = styled.TextInput`
  border: 1px solid #dfdfdf;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
`;
