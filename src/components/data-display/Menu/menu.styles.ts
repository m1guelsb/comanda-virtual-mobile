import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  flex: 1;
`;

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;
export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Separator = styled.View`
  height: 5px;
  width: 5px;
  background-color: #d73035;
  margin: 8px 0;
`;
export const Details = styled.View`
  flex: 1;
  height: 96px;
  justify-content: space-between;
`;
