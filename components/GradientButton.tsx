import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const GradientButton = ({text, colors} : {text: string, colors: string[]}) => {
    return (
        <TouchableOpacity className='w-full h-fit items-end mt-3'>
            <LinearGradient
                colors={[...colors]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                className='w-full h-12 rounded-2xl items-center justify-center'>
                <Text className='text-base font-semibold text-white'>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientButton