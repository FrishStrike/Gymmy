import { View, Image, ImageSourcePropType } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}:{icon:string, color:string, name:string, focused:boolean}) => {
    return (
        <View>
            <Image
                source={icon as ImageSourcePropType}
            />
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
                name="today"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}:{color:string, focused:boolean}) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="home"
                            focused={focused}
                        />
                    )
                }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout