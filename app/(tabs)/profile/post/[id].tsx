import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import Content from '@/components/Content'
import { SafeAreaView } from 'react-native-safe-area-context'

const page = () => {
    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>Post</Text>
                </View>
            </Header>
            <ScrollView>
                <View className='gap-y-4 mt-0 mb-4'>
                    <View className='w-full mt-2 px-2'>
                        <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
                    </View>
                    <View className='w-full mt-2 px-2'>
                        <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
                    </View>
                    <View className='w-full mt-2 px-2'>
                        <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default page