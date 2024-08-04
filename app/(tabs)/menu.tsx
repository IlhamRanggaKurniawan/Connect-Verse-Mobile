import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Header from '@/components/Header'
import { Link } from 'expo-router'

const menu = () => {
    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='w-full items-center'>
                    <Text className='text-lg font-semibold'>Menu</Text>
                </View>
            </Header>
            <ScrollView>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/upload" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Feather name="upload" size={35} color="black" />
                            <Text className='text-lg'>Upload Content</Text>
                        </View>
                    </Link>
                </View>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/ai" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <MaterialCommunityIcons name="robot-excited-outline" size={35} color="black" />
                            <Text className='text-lg'>AI Chatting</Text>
                        </View>
                    </Link>
                </View>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/setting/profile" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Feather name="user" size={35} color="black" />
                            <Text className='text-lg'>Edit Profile</Text>
                        </View>
                    </Link>
                </View>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/setting/password" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Ionicons name="key-outline" size={35} color="black" />
                            <Text className='text-lg'>Change Password</Text>
                        </View>
                    </Link>
                </View>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/saved" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Feather name="bookmark" size={35} color="black" />
                            <Text className='text-lg'>Saved Content</Text>
                        </View>
                    </Link>
                </View>
                {/* <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/setting/profile" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Ionicons name="color-palette-outline" size={35} color="black" />
                            <Text className='text-lg'>Switch Theme</Text>
                        </View>
                    </Link>
                </View> */}
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/problem" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Ionicons name="bug-outline" size={35} color="black" />
                            <Text className='text-lg'>Report a problem</Text>
                        </View>
                    </Link>
                </View>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/setting/profile" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Ionicons name="exit-outline" size={35} color="black" />
                            <Text className='text-lg'>Log out</Text>
                        </View>
                    </Link>
                </View>
                <View className='h-20 border-b border-slate-200 justify-center'>
                    <Link href="/setting/delete" >
                        <View className='flex-row items-center gap-x-4 w-full h-full'>
                            <Feather name="trash" size={35} color="red" />
                            <Text className='text-lg text-red-600'>Delete Account</Text>
                        </View>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default menu