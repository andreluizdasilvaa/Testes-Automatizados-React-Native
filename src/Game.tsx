import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import api from './services/api';

interface GameProp {
    title: string,
    image_url: string
}

export default function Game() {
    const [game, setGame] = useState<GameProp | null>(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {

        async function fetchGame() {
            try {
                const response = await api.get("/next-api/?api=game&id=15")
                setGame({
                    title: response.data.title,
                    image_url: response.data.image_url
                })
            } catch (error) {
                setErrorMsg("Erro ao buscar os dados")
            }
        }

        fetchGame()
    }, []);

    async function handleFetchGame() {   
        try {
            const response = await api.get("/next-api/?api=game&id=2")
            setGame({
                title: response.data.title,
                image_url: response.data.image_url
            })
        } catch (error) {
            setErrorMsg("Erro ao buscar os dados")
        }
    }

    return (
        <View>
            {game && (
                <>
                    <Image
                        testID="avatarGame"
                        source={{ uri: game.image_url}}
                        style={{ width: 70, height: 70, borderRadius: 99 }}
                    />
                    <Text>{game.title}</Text>
                </>
            )}

            { errorMsg !== "" && (<Text style={{fontSize: 30, color: 'red', fontWeight: 'bold', backgroundColor: '#000', padding: 24}}>{errorMsg}</Text>)}

            <Button 
                title="Mudar Game"
                onPress={handleFetchGame}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        gap: 8,
        alignItems: 'center',
    }
})