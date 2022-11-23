import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { Container } from './main.styles';
export const Main = () => {
  return (
    <Container>
      <Header />

      <Categories />

      <Footer />
    </Container>
  );
};
