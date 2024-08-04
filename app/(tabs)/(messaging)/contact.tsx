import { View, ScrollView } from 'react-native'
import React from 'react'
import Contact from '@/components/Contact'
import { Link } from 'expo-router'

const contact = () => {
  return (
    <View className='bg-white h-full w-full'>
      <ScrollView className='w-full mb-2 px-2'>
        <View className='mb-1 w-full bg-slate-100 rounded-3xl h-20'>
          <Link href="/directMessage/1">
            <Contact />
          </Link>
        </View>
        <View className='mb-1 w-full bg-slate-100 rounded-3xl h-20'>
          <Link href="/directMessage/1">
            <Contact />
          </Link>
        </View>
        <View className='mb-1 w-full bg-slate-100 rounded-3xl h-20'>
          <Link href="/directMessage/1">
            <Contact />
          </Link>
        </View>
      
      </ScrollView>
    </View>
  )
}

export default contact