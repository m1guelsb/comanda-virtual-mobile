import { Text } from '@/components/typography';
import { Container } from './header.styles';

export const Header = () => {
  return (
    <Container>
      <Text size={14} opacity={0.9}>
        Bem vindo(a)
      </Text>
      <Text size={24} weight={'700'}>
        Comanda Virtual
      </Text>
    </Container>
  );
};
