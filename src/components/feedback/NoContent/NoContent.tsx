import { Text } from '@/components/typography';
import React from 'react';
import { View } from 'react-native';

interface NoContentProps {
  message: string;
}

export const NoContent = ({ message }: NoContentProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text weight="500">{message}</Text>
    </View>
  );
};
