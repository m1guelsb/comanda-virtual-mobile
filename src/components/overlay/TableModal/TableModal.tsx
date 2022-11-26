import { useState } from 'react';
import { close } from '@/assets/icons';
import { Button } from '@/components/form';
import { Text } from '@/components/typography';
import { Modal, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Container, Form, Header, Input, Overlay } from './table-modal.styles';

interface TableModalProps {
  setSelectedTable(table: string): void;
  visible: boolean;
  onClose(): void;
}
export const TableModal = ({
  visible,
  onClose,
  setSelectedTable,
}: TableModalProps) => {
  const [table, setTable] = useState('');

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay>
        <Container>
          <Header>
            <Text weight="700">Informe a mesa</Text>

            <TouchableOpacity onPress={() => onClose()}>
              <SvgXml xml={close} />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor={'#666666'}
              keyboardType="numeric"
              onChangeText={(value) => setTable(value)}
            />

            <Button
              disabled={table ? false : true}
              onPress={() => {
                setSelectedTable(table);
                setTable('');
                onClose();
              }}
            >
              Salvar
            </Button>
          </Form>
        </Container>
      </Overlay>
    </Modal>
  );
};
