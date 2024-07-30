import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
//   const router = useRouter()

//   useEffect(() => {
//     const timer = setTimeout(() => {
//         router.push("/register");
//     }, 100); // delay to ensure mounting

//     return () => clearTimeout(timer); // cleanup on unmount
// }, []);

  return (
    <SafeAreaView className='bg-white h-full'>
      <View>
        <Text>apa kabar</Text>
        <Text>halo</Text>
      </View>
      <Link href="/login">sssssssssssssssssssss</Link>
    </SafeAreaView>
  );
}
