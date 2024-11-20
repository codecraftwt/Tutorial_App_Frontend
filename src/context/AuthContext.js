import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check if the user is already authenticated
  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking login status', error);
    }
  };

  const value = { isAuthenticated, checkLoginStatus, setIsAuthenticated };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
