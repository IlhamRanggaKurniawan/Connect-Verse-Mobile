import Header from '@/components/Header';
import { Fontisto } from '@expo/vector-icons';
import { Link, Slot, useRouter } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeLayout() {
    const router = useRouteInfo()

    return (
        <SafeAreaView className='bg-white mb-24'>
            <Header >
                <View className='flex-row justify-center w-full gap-6'>
                    <Link href="/trending" className={`text-base ${router.pathname === "/trending" ? "font-bold" : "font-light"}`}>Trending</Link>
                    <Link href="/fyp" className={`text-base ${router.pathname === "/fyp" ? "font-bold" : "font-light"}`}>For Your</Link>
                    <Link href="/following" className={`text-base ${router.pathname === "/following" ? "font-bold" : "font-light"}`}>Following</Link>
                </View>
                <Fontisto name="search" size={20} color="black" />
            </Header>
            <Slot />
        </SafeAreaView>
    );
}
