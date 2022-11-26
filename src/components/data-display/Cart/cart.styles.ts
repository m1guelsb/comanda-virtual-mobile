import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  display: flex;
`;
export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Actions = styled.View`
  width: 64px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
