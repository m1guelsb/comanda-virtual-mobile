import { TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';
import { Container } from './button.styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
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
