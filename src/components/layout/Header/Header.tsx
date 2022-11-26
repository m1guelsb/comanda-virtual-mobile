import { Text } from '@/components/typography';
import { TouchableOpacity, View } from 'react-native';
import { Container, OrderContent, Table } from './header.styles';

interface HeaderProps {
  selectedTable: string;
  cancelOrder(): void;
}
export const Header = ({ selectedTable, cancelOrder }: HeaderProps) => {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem vindo(a)
          </Text>
          <Text size={24} weight={'700'}>
            Comanda Virtual
          </Text>
        </>
      )}

      {selectedTable && (
        <OrderContent>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text size={24} weight={'700'}>
              Pedido
            </Text>
            <TouchableOpacity onPress={() => cancelOrder()}>
              <Text size={14} weight={'500'} color={'#d73035'}>
                Cancelar pedido
              </Text>
            </TouchableOpacity>
          </View>

          <Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </Table>
        </OrderContent>
      )}
    </Container>
  );
};
