import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import GradientButton from '@/components/GradientButton'

const login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView className='bg-white w-full h-full'>
            <View className='absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-2xl ' />
            <View className='absolute top-6 right-2 w-20 h-20 bg-yellow-300 rounded-bl-xl' />
            <View className='flex-1 justify-center px-6'>
                <Text className='text-4xl font-bold text-yellow-400'>Login</Text>
                <Text className='text-slate-400 mb-10 text-lg'>Please sign in to continue</Text>
                <View className='gap-3'>
                    <FormField
                        placeholder='username'
                        value={username}
                        handleChange={setUsername}
                        type="default"
                    />
                    <FormField
                        placeholder='password'
                        value={password}
                        handleChange={setPassword}
                        type='default'
                        secureTextEntry
                    />
                </View>
                <GradientButton text='LOGIN' colors={["rgb(253,162,60)", "rgb(244,195,0)"]}/>
                <Text className='text-lg text-slate-400 mt-4'>Don't have an account ? <Link href="/register" className='text-orange-400 font-extrabold'>Sign Up</Link></Text>
            </View>
        </SafeAreaView>
    )
}

export default login