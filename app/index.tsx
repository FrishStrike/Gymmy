import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-100">
      <Text className="text-3xl font-extrabold">ПРИВЕТ</Text>
      <Link href="./(tabs)/today" style={{color:'red'}}>Нажми сюда!</Link>
    </View>
  );
}
