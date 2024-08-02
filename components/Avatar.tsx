import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const Avatar = ({ pictureUrl}: { pictureUrl: string | null}) => {
  return (
      <Image className="rounded-full h-full w-full" source={pictureUrl ? {uri : pictureUrl} : require('../assets/images/profile-picture.jpg')}/>
  )
}

export default Avatar