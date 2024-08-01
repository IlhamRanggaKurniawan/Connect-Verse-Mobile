import { View,  } from 'react-native'
import React from 'react'

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className={`sticky top-0 w-full h-12 flex-row items-center px-4 justify-between bg-white`}>
      {children}
    </View>
  )
}

export default Header