import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue">
      <Text>Юля Печерикина, ты хочешь знать правду о себе?</Text>
      <Link href="/skuf" style={{color:'red'}}>Нажми сюда!</Link>
    </View>
  );
}
