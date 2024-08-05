import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import FormField from '@/components/FormField'

const problem = () => {
    const [feedback, setFeedback] = useState("")

    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>Report a Problem</Text>
                </View>
            </Header>
            <View>
            <View className='m-4'>
                    <FormField className="border border-slate-200 rounded-2xl h-32" value={feedback} handleChange={setFeedback} placeholder='bio' type='default' multiline numberOfLines={4} textAlignVertical="top" />
                </View>
                <TouchableOpacity className='bg-slate-800 p-4 px-6 rounded-2xl m-4'>
                    <Text className='text-base text-white text-center'>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
  )
}

export default problem