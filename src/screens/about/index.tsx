import React from 'react';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';

export function AboutScreen() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pagina Sobre</Text>

      <TouchableOpacity testID='btnInfo' onPress={() => setIsVisible(!isVisible)}>
        <Text>Acessar informações</Text>
      </TouchableOpacity>

      <Modal
         visible={isVisible}
         testID='modal-secret-info'
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
         }}
        >
          <Text>Informações inportantes...</Text>
          <Text>Informações inportantes...</Text>
          <Text>Informações inportantes...</Text>
          <Text>Informações inportantes...</Text>
          <Text>Informações inportantes...</Text>

          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Text>Fechar informações</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}