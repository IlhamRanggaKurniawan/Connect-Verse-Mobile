import Header from '@/components/Header';
import { Fontisto } from '@expo/vector-icons';
import { Link, Slot, useRouter } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeLayout() {
    const router = useRouteInfo()

    console.log(router.pathname)

    return (
        <SafeAreaView className='bg-white mb-24'>
            <Header >
                <View className='flex-row justify-center w-full gap-6'>
                    <Link href="/contact" className={`text-base ${router.pathname === "/contact" ? "font-bold" : "font-light"}`}>Private</Link>
                    <Link href="/group" className={`text-base ${router.pathname === "/group" ? "font-bold" : "font-light"}`}>Group</Link>
                </View>
                <Fontisto name="search" size={20} color="black" />
            </Header>
            <Slot />
        </SafeAreaView>
    );
}
