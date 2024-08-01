import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

const Contact = () => {
    return (
        <View className='h-20 flex-row items-center gap-3 w-full bg-slate-100'>
            <View className='w-14 h-14'>
                <Avatar pictureUrl="https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg" />
            </View>
            <Text className='text-lg'>Contact</Text>
        </View>
    )
}

export default Contact