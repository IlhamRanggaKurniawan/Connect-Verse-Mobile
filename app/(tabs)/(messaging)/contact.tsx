import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Contact from '@/components/Contact'
import Avatar from '@/components/Avatar'

const contact = () => {
  return (
    <View className='bg-white h-full'>
      <ScrollView>
      <View className='gap-y-4 mt-0 mb-4'>
        <Avatar pictureUrl={""}/>
        <Avatar pictureUrl={""}/>
        <Avatar pictureUrl={""}/>
        <Avatar pictureUrl={""}/>
        <Avatar pictureUrl={""}/>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </View>
      </ScrollView>
    </View>
  )
}

export default contact