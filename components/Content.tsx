import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Bookmark, EllipsisVertical, Heart, MessageCircle, Share } from 'lucide-react-native'
import Avatar from './Avatar'

const Content = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <View className='w-full mt-2 px-2'>
            <View className='w-full bg-slate-100 rounded-3xl'>
                <View className='w-full h-14 flex-row items-center justify-between px-5'>
                    <View className='flex-row items-center gap-4'>
                        <View className='h-10 w-10'>
                            <Avatar pictureUrl={null} />
                        </View>
                        <Text className='text-base'>ilham rangga</Text>
                    </View>
                    <EllipsisVertical size={24} color="black" />
                </View>
                <View className='w-full rounded-2xl px-2'>
                    <Image source={{ uri: imageUrl }} className='h-96 rounded-3xl' contentFit='cover' />
                </View>
                <View className='w-full flex-row p-2 px-3 justify-between'>
                    <View className='flex-row gap-4'>
                        <View className='flex-row items-center gap-x-2'>
                            <Heart size={24} color="black" />
                            <Text className='text-base font-semibold'>3.2k</Text>
                        </View>
                        <View className='flex-row items-center'>
                            <MessageCircle size={24} color="black" />
                        </View>
                        <View className='flex-row items-center'>
                            <Share size={24} color="black" />
                        </View>
                    </View>
                    <Bookmark size={24} color="black" />
                </View>
                <View className='px-4 pb-2'>
                    <Text>Lorem ipsum, dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim fuga nihil delectus earum. Facere modi exercitationem, consequuntur aliquam inventore suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores consectetur dolorem magnam tenetur ea, saepe eligendi accusamus esse laboriosam. adipisicing elit. Iusto, cupiditate.</Text>
                </View>
            </View>
        </View>
    )
}

export default Content