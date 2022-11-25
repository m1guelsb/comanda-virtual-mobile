import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  padding: 16px;
  flex-grow: 1;
  flex-direction: column;
  gap: 24px;
  background-color: #ffeded;
`;
