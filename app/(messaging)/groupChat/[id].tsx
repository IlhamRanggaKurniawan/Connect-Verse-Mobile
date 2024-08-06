import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Message from '@/components/Message'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import MessageInput from '@/components/MessageInput'

const page = () => {
    const [input, setInput] = useState("")
    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>group</Text>
                </View>
            </Header>
            <ScrollView className='mb-16'>
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
                <Message userId={2} message='halo' />
                <Message userId={1} message='tes' />
            </ScrollView>
            <MessageInput value={input} handleChange={setInput} />
        </SafeAreaView>
    )
}

export default page