import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Message() {
    const [showMessage, setShowMessage] = useState(false);

    function toggleMessage() {
        // Demora 2 segundos para executar
        setTimeout(() => {
            setShowMessage(!showMessage)
        }, 2000);
    }

    return (
        <View>
            <Text testID='message'>{showMessage ? "Bem vindo!" : "Aguardando..."}</Text>
            
            <Button title='Acessar' onPress={toggleMessage}/>
        </View>
    )
}