import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Content from '@/components/Content'

const fyp = () => {
    return (
        <View>
            <ScrollView>
                <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
                <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
                <Content imageUrl='https://gsjjcfotrvkfpibhnnji.supabase.co/storage/v1/object/public/Connect%20Verse/Content/171993024088674146.jpg' />
            </ScrollView>
        </View>
    )
}

export default fyp