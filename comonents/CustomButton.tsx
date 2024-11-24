import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}:{title:string, handlePress:(event: GestureResponderEvent) => void, containerStyles:string, textStyles:string, isLoading:boolean}) => {
  return (
    <TouchableOpacity 
        onPress = {handlePress}
        activeOpacity={1}
        className={`bg-secondary-200 bg-rounded-xl min-h-[100px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton