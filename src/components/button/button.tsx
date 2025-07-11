import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
    onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
        <TouchableOpacity
            style={{
            backgroundColor: "#007bff",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            }}
            testID="button-test"
            onPress={onPress}
        >
            <Text style={{ color: "#fff" }}>{title}</Text>
        </TouchableOpacity>
  );
}