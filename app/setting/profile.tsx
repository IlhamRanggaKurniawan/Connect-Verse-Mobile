import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import Avatar from '@/components/Avatar'
import FormField from '@/components/FormField'

const profile = () => {
    const [bio, setBio] = useState("")

    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>Edit Profile</Text>
                </View>
            </Header>
            <View className='m-4'>
                <View className='w-full bg-slate-100 items-center rounded-3xl py-4'>
                    <View className='w-24 h-24 mb-4'>
                        <Avatar pictureUrl={null} />
                    </View>
                    <TouchableOpacity className='bg-slate-800 p-4 px-6 rounded-2xl'>
                        <Text className='text-base text-white'>Change Profile Picture</Text>
                    </TouchableOpacity>
                </View>
                <View className='mt-4'>
                    <FormField className="border border-slate-200 rounded-2xl h-32" value={bio} handleChange={setBio} placeholder='bio' type='default' multiline numberOfLines={4} textAlignVertical="top" />
                </View>
                <TouchableOpacity className='bg-slate-800 p-4 px-6 rounded-2xl mt-4'>
                    <Text className='text-base text-white text-center'>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default profile