import Avatar from '@/components/Avatar';
import Content from '@/components/Content';
import Header from '@/components/Header';
import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const router = useRouter()

    useEffect(() => {
      const timer = setTimeout(() => {
          router.push("/profile/ilham");
      }, 100); // delay to ensure mounting

      return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <SafeAreaView className='bg-white h-full'>
      <Header>
        <Text className='text-2xl font-semibold'>Connect Verse</Text>
        <Feather name='bell' size={25} />
      </Header>
      <ScrollView className='w-full'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className='flex-row gap-4 px-4'>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
            <View className='items-center'>
              <View className='w-16 h-16'>
                <Avatar pictureUrl={null} />
              </View>
              <Text className="w-16" numberOfLines={1} ellipsizeMode="tail">asjdaisdjaisjdiaosjdiajsdoji</Text>
            </View>
          </View>
        </ScrollView>
        <View className='gap-y-4 mt-0 mb-4'>
          <View className='w-full mt-2 px-2'>
            <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
          </View>
          <View className='w-full mt-2 px-2'>
            <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
          </View>
          <View className='w-full mt-2 px-2'>
            <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
          </View>
          <View className='w-full mt-2 px-2'>
            <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
          </View>
          <View className='w-full mt-2 px-2'>
            <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
