import { View, Text } from 'react-native'
import React from 'react'

const Message = ({ message, userId }: { message: string, userId: number, }) => {
    return (
        <>
            {userId !== 1 ? (
                <View className='justify-center items-start ml-2 mb-1'>
                    <View className='w-fit bg-slate-200 rounded-2xl p-2 px-4 max-w-[70%]'>
                        <Text>{message}</Text>
                    </View>
                </View>
            ) : (
                <View className='justify-center items-end mr-2 mb-1'>
                    <View className='w-fit bg-blue-400 rounded-2xl p-2 px-4 max-w-[70%]'>
                        <Text className='text-white'>{message}</Text>
                    </View>
                </View>
            )}
        </>
    )
}

export default Message