import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'

const Content = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <View className='w-full bg-slate-100 rounded-3xl'>
            <View className='w-full h-14 flex-row items-center justify-between px-5'>
                <View className='flex-row items-center gap-4'>
                    <View className='h-10 w-10'>
                        <Avatar pictureUrl={null} />
                    </View>
                    <Text className='text-base'>ilham rangga</Text>
                </View>
                <Ionicons name="ellipsis-vertical" size={24} color="black"/>
            </View>
            <View className='w-full rounded-2xl aspect-square px-1'>
                <Image source={{ uri: imageUrl }}  className='w-full h-full rounded-3xl aspect-square' />
            </View>
            <View className='w-full flex-row p-2 px-3 justify-between'>
                <View className='flex-row gap-4'>
                    <View className='flex-row items-center gap-x-2'>
                        <Feather name="heart" size={24} color="black" />
                        <Text className='text-base font-semibold'>3.2k</Text>
                    </View>
                    <View className='flex-row items-center'>
                        <Feather name="message-circle" size={24} color="black" />
                    </View>
                    <View className='flex-row items-center'>
                        <Feather name="share" size={24} color="black" />
                    </View>
                </View>
                <Feather name="bookmark" size={24} color="black"/>
            </View>
            <View className='px-4 pb-2'>
                <Text>Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim fuga nihil delectus earum. Facere modi exercitationem, consequuntur aliquam inventore suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores consectetur dolorem magnam tenetur ea, saepe eligendi accusamus esse laboriosam. adipisicing elit. Iusto, cupiditate.</Text>
            </View>
        </View>
    )
}

export default Content