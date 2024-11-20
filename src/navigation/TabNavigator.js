


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import UserListScreen from '../screens/UserListScreen';


// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false, // Hide header for tab screens
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="UserList" component={UserListScreen} />

//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       {/* <Tab.Screen name="categories" component={CategoriesScreen} /> */}
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icons
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserListScreen from '../screens/MyCourses';
import SearchScreen from '../screens/SearchScreen';
import MyCourses from '../screens/MyCourses';
// import SearchScreen from '../screens/SearchScreen'; // Import the Search screen

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide header for tab screens
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Mycourses') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3AA6B9', // Set the active color here
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      {/* <Tab.Screen name="Search" component={SearchScreen} /> Add Search screen */}
      {/* <Tab.Screen name="UserList" component={UserListScreen} /> */}
      <Tab.Screen name= "Mycourses" component={MyCourses} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
