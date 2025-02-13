import { Text, View, ScrollView, Image, GestureResponderEvent } from "react-native";
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants'
import CustomButton from "@/comonents/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{
        height: '100%'
      }} >
        <View className="w-full justify-center items-center h-full px-4" >
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
                Следите за результатами тренировок с {" "}
                <Link className="text-secondary-200 text-" href="./(tabs)/today">GYMMY</Link>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Исследуйте динамику своих тренировок, веса, питания и многого другого. Делитесь результатами с друзьями. Найдите единомышленников!
          </Text>
          <CustomButton
            title = "Зарегистрироваться с имейлом"
            handlePress= {(event: GestureResponderEvent):void=>{ router.push('./signIn') }}
            containerStyles = "w-full mt-7"
            textStyles=""
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
