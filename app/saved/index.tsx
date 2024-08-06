import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router } from 'expo-router'

const saved = () => {

    const images = [
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
        { uri: "https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" },
    ];

    return (
        <SafeAreaView className='h-full bg-white'>
            <Header>
                <View className='flex-row gap-10 items-center'>
                    <AntDesign name="arrowleft" size={30} color="black" onPress={router.back} />
                    <Text className='text-lg font-semibold'>Saved Content</Text>
                </View>
            </Header>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <TouchableOpacity className='w-[33%] p-0.5' onPress={() => router.push("/saved/1")}>
                        <Image source={{ uri: item.uri }} className='w-full aspect-square rounded-xl' contentFit='cover' />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                contentContainerStyle={{ padding: 8 }}
            />
        </SafeAreaView>
    )
}

export default saved