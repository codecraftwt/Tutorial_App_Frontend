import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { useAuth } from './context/AuthContext'; // Import the custom hook

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated, checkLoginStatus } = useAuth(); // Use the hook

  useEffect(() => {
    checkLoginStatus(); // Check if user is already logged in
  }, [checkLoginStatus]);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import TabNavigator from './navigation/TabNavigator';
// import HomeScreen from './screens/HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import ProfileScreen from './screens/ProfileScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

// import React from 'react';
// import TabNavigator from './navigation/TabNavigator';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import HomeScreen from './screens/HomeScreen';
// import DrawerNavigator from './navigation/DrawerNavigator';
// import EditProfileScreen from './screens/EditProfileScreen';
// import UserListScreen from './screens/MyCourses';
// import ProfileScreen from './screens/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import SearchScreen from './screens/SearchScreen';
// import DomainScreen from './screens/DomainScreen';
// import {createStackNavigator} from '@react-navigation/stack';
// import CourseDetailsScreen from './screens/CourseDetailsPage';
// import MyCourses from './screens/MyCourses';


// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Tab"
//         component={TabNavigator}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="login"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="register"
//         component={RegisterScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Main"
//         component={DrawerNavigator}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="EditProfile"
//         component={EditProfileScreen}
//         options={{title: 'Edit Profile'}} // Customize the header options if needed
//       />
//       <Stack.Screen
//         name="UserList"
//         component={MyCourses}
//         options={{title: 'Edit Profile'}} // Customize the header options if needed
//       />
//       <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{title: 'Edit Profile'}} // Customize the header options if needed
//       />
//       <Stack.Screen
//         name="Setting"
//         component={SettingsScreen}
//         options={{title: 'Edit Profile'}} // Customize the header options if needed
//       />
//       <Stack.Screen name="Search" component={SearchScreen} />
//       <Stack.Screen name="Domain" component={DomainScreen} options={{ title: 'Course domain'}}/>
//       <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      
      
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
