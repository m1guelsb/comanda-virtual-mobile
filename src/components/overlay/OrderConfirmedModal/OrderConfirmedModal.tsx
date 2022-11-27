import { Button } from '@/components/form';
import { Text } from '@/components/typography';
import { Modal } from 'react-native';
import { Container } from './order-confirmed-modal';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk(): void;
}

export const OrderConfirmedModal = ({
  visible,
  onOk,
}: OrderConfirmedModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <Text size={20} weight={'700'} color="#fff">
          Pedido confirmado
        </Text>
        <Text color="#fff">O pedido entou na fila de produção</Text>
        <Button
          onPress={() => onOk()}
          style={{ backgroundColor: '#fff', marginTop: 6 }}
        >
          <Text weight="700" color="#d73035">
            OK
          </Text>
        </Button>
      </Container>
    </Modal>
  );
};
