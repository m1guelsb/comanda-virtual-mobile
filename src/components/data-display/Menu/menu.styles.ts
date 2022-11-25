import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  flex: 1;
`;

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #ffffff;
`;
export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 4px;
  margin-right: 8px;
`;
export const Details = styled.View`
  flex: 1;
  height: 96px;
  justify-content: space-between;
`;
