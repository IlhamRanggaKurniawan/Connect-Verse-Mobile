import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Avatar from '@/components/Avatar'
import { Image } from 'expo-image'
import { FlatList } from 'react-native-gesture-handler'
import { router } from 'expo-router'

const username = () => {

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

  const profileHeader = () => (
    <>
      <View className='w-full items-center mt-6'>
        <View className='w-20 h-20'>
          <Avatar pictureUrl="https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Profile%20Picture/172147583279410878.jpg" />
        </View>
        <Text className='text-lg mt-2'>username</Text>
        <View className='flex-row gap-x-6 mt-4'>
          <View className='items-center w-20'>
            <Text className='text-base'>200</Text>
            <Text className='text-base'>Following</Text>
          </View>
          <View className='items-center w-20'>
            <Text className='text-base'>200</Text>
            <Text className='text-base'>Follower</Text>
          </View>
          <View className='items-center w-20'>
            <Text className='text-base'>200</Text>
            <Text className='text-base'>Post</Text>
          </View>
        </View>
      </View>
      <View className='w-full flex-row justify-center gap-x-6 items-center mt-4'>
        <TouchableOpacity className='bg-white p-4 w-28 items-center rounded-full shadow-md shadow-black'>
          <Text className='text-base'>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-white p-4 w-28 items-center rounded-full shadow-md shadow-black'>
          <Text className='text-base'>Message</Text>
        </TouchableOpacity>
      </View>
      <View className='w-full px-8 mb-2'>
        <View className='w-full h-0.5 bg-slate-200 mt-4' />
      </View>
    </>
  );


  return (
    <SafeAreaView className='bg-white h-full'>
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <TouchableOpacity className='w-[33%] p-0.5' onPress={() => router.push("/profile/falah/1")}>
          <Image source={{ uri: item.uri }} className='w-full aspect-square rounded-xl' contentFit='cover' />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      ListHeaderComponent={profileHeader}
      contentContainerStyle={{ padding: 8 }}
    />
  </SafeAreaView>
  )
}

export default username