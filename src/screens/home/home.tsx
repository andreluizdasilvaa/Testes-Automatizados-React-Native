import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = React.useState("")

  function createUser() {
    setName('André')
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Página Inicial</Text>
      <Link
        href="/about"
      >
        Ir para About
      </Link>

      <TouchableOpacity onPress={createUser}>
        <Text>Acessar</Text>
      </TouchableOpacity>

      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})