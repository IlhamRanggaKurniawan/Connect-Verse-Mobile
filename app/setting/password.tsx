import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { router, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import FormField from '@/components/FormField'

const password = () => {
    const [password, setPassword] = useState("")
    const [confPassword, SetConfPassword] = useState("")
    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>Change Password</Text>
                </View>
            </Header>
            <View>
                <View className='m-4'>
                    <Text className='text-lg '>Password</Text>
                    <FormField type='default' secureTextEntry value={password} handleChange={setPassword} placeholder='password' />
                </View>
                <View className='m-4'>
                    <Text className='text-lg '>Confirm Password</Text>
                    <FormField type='default' secureTextEntry value={confPassword} handleChange={SetConfPassword} placeholder='confirm password' />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default password