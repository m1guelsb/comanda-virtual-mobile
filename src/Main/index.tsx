import { useState } from 'react';
import { Container } from './main.styles';
import { Header, Footer } from '@/components/layout';
import { Categories, Menu } from '@/components/data-display';
import { TableModal } from '@/components/overlay';
import { Button } from '@/components/form';

export const Main = () => {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          cancelOrder={() => setSelectedTable('')}
        />

        <Categories />

        <Menu />

        <Footer>
          {!selectedTable ? (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
          ) : (
            <></>
          )}
        </Footer>
      </Container>

      <TableModal
        setSelectedTable={(table) => setSelectedTable(table)}
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
      />
    </>
  );
};
