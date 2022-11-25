import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  height: 80px;
  align-items: center;
  flex-direction: row;
`;

export const Category = styled.TouchableOpacity`
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.View`
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  border: 1px solid #cfcfcf;
  background-color: #ffffff;
`;
