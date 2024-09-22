import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Compass, Home, Menu, MessageCircle, UserCircle } from 'lucide-react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          // title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={Home} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(explore)"
        options={{
          // title: 'Explore',
          href: "/fyp",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={Compass} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          // title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={Menu} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(messaging)"
        options={{
          // title: 'Messages',
          href: '/contact',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={MessageCircle} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/[username]/index"
        options={{
          // title: 'Profile',
          href: '/profile/ilham',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={UserCircle} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
