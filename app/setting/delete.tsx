import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'

const deletePage = () => {
    const router = useRouter()

    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>Delete Account</Text>
                </View>
            </Header>
            <Text>profile</Text>
        </SafeAreaView>
    )
}

export default deletePage