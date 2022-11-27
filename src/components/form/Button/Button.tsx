import { TouchableOpacityProps } from 'react-native';
import { Text } from '@/components/typography';
import { Container } from './button.styles';
import { ReactElement } from 'react';

interface ButtonProps extends TouchableOpacityProps {
  children: string | ReactElement;
}
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <Text color="#f1f1f1" weight="500">
        {children}
      </Text>
    </Container>
  );
};
