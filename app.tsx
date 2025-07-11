import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Title from "./src/Title";
import Message from "./src/Message";

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>App contador</Text>
            <Title title="Clique para incrementar!!" />
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    onPress={() => setCount(count - 1)}
                    style={styles.btn}
                >
                    <Text style={{ fontSize: 30, color: '#fff' }}>-</Text>
                </TouchableOpacity>

                <Text testID="counter">{count}</Text>

                <TouchableOpacity
                    onPress={() => setCount(count + 1)}
                    style={styles.btn}
                >
                    <Text style={{ fontSize: 30, color: '#fff' }}>+</Text>
                </TouchableOpacity>
            </View>

            <Message />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    },  
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#000',
    }
})