import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Content from '@/components/Content'
import Header from '@/components/Header'
import { Bell } from 'lucide-react-native'

const index = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <Header>
        <Text className='text-2xl font-semibold'>Connect Verse</Text>
        <Bell size={25} color="black"/>
      </Header>
      <ScrollView>
        <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
        <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
        <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index