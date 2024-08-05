import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import FormField from '@/components/FormField'

const deletePage = () => {
    const [username, setUsername] = useState("")
    const [key, setKey] = useState("")

    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold text-red-500'>Delete Account</Text>
                </View>
            </Header>
            <View >
                <View className='mx-4'>
                    <Text className='text-lg ml-2'>enter your username</Text>
                    <FormField type='default' value={username} handleChange={setUsername} placeholder='username' className="border border-slate-200 rounded-2xl" />
                </View>
                <View className='m-4'>
                    <Text className='text-lg ml-2'>
                        type <Text className='italic'>"delete my account"</Text> below
                    </Text>
                    <FormField type='default' value={key} handleChange={setKey} placeholder='delete my account' className="border border-slate-200 rounded-xl" />
                </View>
                <TouchableOpacity className='bg-red-500 p-4 px-6 rounded-2xl m-4'>
                    <Text className='text-base text-white text-center'>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default deletePage