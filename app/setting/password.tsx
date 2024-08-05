import { View, Text, TouchableOpacity } from 'react-native'
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
                <View className='mx-4'>
                    <Text className='text-lg ml-2'>Password</Text>
                    <FormField type='default' secureTextEntry value={password} handleChange={setPassword} placeholder='password' className="border border-slate-200 rounded-2xl"/>
                </View>
                <View className='m-4'>
                    <Text className='text-lg ml-2'>Confirm Password</Text>
                    <FormField type='default' secureTextEntry value={confPassword} handleChange={SetConfPassword} placeholder='confirm password' className="border border-slate-200 rounded-xl"/>
                </View>
                <TouchableOpacity className='bg-slate-800 p-4 px-6 rounded-2xl m-4'>
                    <Text className='text-base text-white text-center'>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default password