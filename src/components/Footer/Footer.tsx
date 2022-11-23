import { Button } from '../Button';
import { Container } from './footer.styles';

export const Footer = () => {
  return (
    <Container>
      <Button onPress={() => alert('aalo')}>Novo Pedido</Button>
    </Container>
  );
};
