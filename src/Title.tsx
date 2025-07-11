import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function Title({ title }: { title: string }) {
    return (
        <Text style={styles.text}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        color: 'red',
        marginBottom: 20
    }
})