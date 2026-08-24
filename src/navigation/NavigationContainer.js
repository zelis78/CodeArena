import React from 'react';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChallengeDetailScreen from '../screens/ChallengeDetailScreen';
import CodeEditorScreen from '../screens/CodeEditorScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#1a1a2e',
  },
  headerTintColor: '#00d4ff',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerBackTitle: 'Geri',
};

const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Challenges') {
      iconName = focused ? 'sword' : 'sword-outline';
    } else if (route.name === 'Leaderboard') {
      iconName = focused ? 'trophy' : 'trophy-outline';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'person' : 'person-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#00d4ff',
  tabBarInactiveTintColor: '#666666',
  tabBarStyle: {
    backgroundColor: '#16213e',
    borderTopColor: '#0f3460',
    borderTopWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    height: 70,
  },
  headerShown: true,
});

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{ title: 'Ana Sayfa' }}
      />
      <Stack.Screen 
        name="ChallengeDetail" 
        component={ChallengeDetailScreen}
        options={{ title: 'Görev Detayı' }}
      />
      <Stack.Screen 
        name="CodeEditor" 
        component={CodeEditorScreen}
        options={{ title: 'Kod Editörü' }}
      />
    </Stack.Navigator>
  );
}

function ChallengesStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name="ChallengesMain" 
        component={ChallengesScreen}
        options={{ title: 'Görevler' }}
      />
      <Stack.Screen 
        name="ChallengeDetail" 
        component={ChallengeDetailScreen}
        options={{ title: 'Görev Detayı' }}
      />
      <Stack.Screen 
        name="CodeEditor" 
        component={CodeEditorScreen}
        options={{ title: 'Kod Editörü' }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <RNNavigationContainer>
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{ 
            title: 'Ana Sayfa',
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Challenges" 
          component={ChallengesStack}
          options={{ 
            title: 'Görevler',
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Leaderboard" 
          component={LeaderboardScreen}
          options={{ 
            title: 'Sıralama',
            headerShown: true,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ 
            title: 'Profil',
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </RNNavigationContainer>
  );
}
