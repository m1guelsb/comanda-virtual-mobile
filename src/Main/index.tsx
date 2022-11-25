import { Container } from './main.styles';
import { Header, Footer } from '@/components/layout';
import { Categories, Menu } from '@/components/data-display';
import { TableModal } from '@/components/overlay';
import { useState } from 'react';
import { Button } from '@/components/form';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />

        <Categories />

        <Menu />

        <Footer>
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
        </Footer>
      </Container>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
      />
    </>
  );
};
