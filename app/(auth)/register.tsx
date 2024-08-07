import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import GradientButton from '@/components/GradientButton'
import { useSession } from '@/hooks/useSession'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

const register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const register = async () => {
        try {
            setError("")

            const user = await axios.post(`${process.env.API_URL}/user/register`, {
                username, password, confirmPassword, email
            })

            SecureStore.setItemAsync("Token", user.data.AccessToken)

            router.push("/")
        } catch (error) {
            setError((error as Error).message)
            console.error(error)
        }
    }


    return (
        <SafeAreaView className='bg-white w-full h-full'>
            <View className='absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-bl-2xl ' />
            <View className='absolute top-6 right-2 w-20 h-20 bg-yellow-300 rounded-bl-xl' />
            <View className='flex-1 justify-center px-6'>
                <Text className='text-4xl font-bold mb-6 text-yellow-400'>Create Account</Text>
                <View className='gap-4'>
                    <FormField
                        placeholder='username'
                        value={username}
                        handleChange={setUsername}
                        type="default"
                    />
                    <FormField
                        placeholder='email'
                        value={email}
                        handleChange={setEmail}
                        type="email-address"
                    />
                    <FormField
                        placeholder='password'
                        value={password}
                        handleChange={setPassword}
                        type='default'
                        secureTextEntry
                    />
                    <FormField
                        placeholder='confirm password'
                        value={confirmPassword}
                        handleChange={setConfirmPassword}
                        type='default'
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    className='w-full h-12 rounded-2xl items-center justify-center bg-yellow-500 mt-2'
                    onPress={register}>
                    <Text className='text-base font-semibold text-white'>Sign up</Text>
                </TouchableOpacity>
                <Text className='text-lg text-slate-400 mt-4'>Already have an account ? <Link href="/login" className='text-orange-400 font-extrabold'>Sign in</Link></Text>
            </View>
        </SafeAreaView>
    )
}

export default register