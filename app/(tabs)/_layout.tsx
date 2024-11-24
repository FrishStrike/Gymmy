import { View, Image, ImageSourcePropType, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}:{icon:string, color:string, name:string, focused:boolean}) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon as ImageSourcePropType}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text 
                className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} 
                style={{
                    color:color,
                    
                }}
                >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84
                }
            }}>
            <Tabs.Screen 
                name="today"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}:{color:string, focused:boolean}) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="graphs"
                options={{
                    title: 'Graphs',
                    headerShown: false,
                    tabBarIcon: ({color, focused}:{color:string, focused:boolean}) => (
                        <TabIcon 
                            icon={icons.search}
                            color={color}
                            name="Graphs"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="social"
                options={{
                    title: 'Social',
                    headerShown: false,
                    tabBarIcon: ({color, focused}:{color:string, focused:boolean}) => (
                        <TabIcon 
                            icon={icons.eye}
                            color={color}
                            name="Social"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color, focused}:{color:string, focused:boolean}) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout