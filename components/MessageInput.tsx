import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Fontisto, Ionicons } from '@expo/vector-icons';

interface MessageInputProps {
    value: string;
    handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, handleChange }) => {
    return (
        <View className='absolute bottom-0 w-full h-14 px-3 flex-row items-center gap-x-3 '>
            <View className='border border-slate-300 justify-center w-[90%] rounded-full my-1'>
                <TextInput
                    value={value}
                    placeholder="Message...."
                    onChangeText={handleChange}
                    keyboardType="default"
                    className='p-3 text-base'
                />
            </View>
            <Ionicons name="paper-plane-outline" size={30} color="black" />
        </View>
    )
}

export default MessageInput