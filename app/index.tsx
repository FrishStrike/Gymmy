import { Text, View } from "react-native";
import { Link } from 'expo-router'
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Юля Печерикина, ты хочешь знать правду о себе?</Text>
      <Link href="/skuf" style={{color:'red'}}>Нажми сюда!</Link>
    </View>
  );
}
