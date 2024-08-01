import { View, Text, Image } from 'react-native'
import React from 'react'

const Avatar = ({ pictureUrl}: { pictureUrl: string | null}) => {
  return (
      <Image className="rounded-full h-full w-full" source={pictureUrl ? {uri : pictureUrl} : require('../assets/images/profile-picture.jpg')}/>
  )
}

export default Avatar