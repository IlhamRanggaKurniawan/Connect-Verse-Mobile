import { View, Text, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

interface FormFieldProps {
    placeholder: string;
    value: string;
    handleChange: React.Dispatch<React.SetStateAction<string>>;
    type: KeyboardTypeOptions;
    [key: string]: any;
}

const FormField: React.FC<FormFieldProps> = ({ placeholder, value, handleChange, type, ...props }) => {
    return (
            <View className={`border-b border-slate-300 justify-center w-full rounded-lg mb-2 ${props.className}`}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleChange}
                    keyboardType={type}
                    className='p-3 text-base'
                    {...props}
                />
            </View>
    )
}

export default FormField