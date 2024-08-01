import { View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Content from '@/components/Content'

const trending = () => {
  return (
    <View className='bg-white h-full'>
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
</View>
  )
}

export default trending