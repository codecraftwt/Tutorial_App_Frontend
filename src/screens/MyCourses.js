// import React from 'react';
// import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// const users = [
//   {
//     id: '1',
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     image: require('../assets/user.png'),  
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com',
//     image: require('../assets/user.png'), 
//   },
//   {
//     id: '3',
//     name: 'Chris Johnson',
//     email: 'chris.johnson@example.com',
//     image: require('../assets/user.png'), 
//   },
// ];

// const UserListScreen = () => {
//   const renderUserItem = ({ item }) => (
//     <View style={styles.userContainer}>
//       <Image source={item.image} style={styles.profileImage} />
//       <View style={styles.userInfo}>
//         <Text style={styles.nameText}>{item.name}</Text>
//         <Text style={styles.emailText}>{item.email}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id}
//         renderItem={renderUserItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//   },
//   userContainer: {
//     flexDirection: 'row',
//     padding: 15,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   userInfo: {
//     justifyContent: 'center',
//   },
//   nameText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#80A9F8'
//   },
//   emailText: {
//     fontSize: 14,
//     color: '#777',
//   },
// });

// export default UserListScreen;






// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
// import realm from '../schemas/realmSchemas'; 
// const UserListScreen = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const loadUsers = () => {
//       const allUsers = realm.objects('User'); 
//       setUsers(allUsers);
//     };

//     loadUsers();
    
//     realm.addListener('change', loadUsers);

//     return () => {
//       realm.removeListener('change', loadUsers);
//     };
//   }, []);

//   console.log('result===================>>',users)
//   const renderUserItem = ({ item }) => (
//     <View style={styles.userContainer}>
//       <Image 
//         source={{ uri: item.image }} 
//         style={styles.profileImage} 
//       />
//       <View style={styles.userInfo}>
//         <Text style={styles.nameText}>{item.username}</Text>
//         <Text style={styles.emailText}>{item.email}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id}
//         renderItem={renderUserItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//   },
//   userContainer: {
//     flexDirection: 'row',
//     padding: 15,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   userInfo: {
//     justifyContent: 'center',
//   },
//   nameText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#80A9F8'
//   },
//   emailText: {
//     fontSize: 14,
//     color: '#777',
//   },
// });

// export default UserListScreen;
// import React, { useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, deleteUser } from '../redux/slices/userSlice';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

// const UserListScreen = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.userList);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (userId) => {
//     // Add your edit logic here, e.g., navigate to an edit screen
//     console.log("Edit user:", userId);
//   };

//   const handleDelete = (userId) => {
//     // Dispatch delete action
//     dispatch(deleteUser(userId));
//   };

//   const renderUserItem = ({ item }) => (
//     <View style={styles.userItem}>
//       <Image source={{ uri: item.image }} style={styles.userImage} />
//       <View style={styles.userInfo}>
//         <Text style={styles.username}>{item.username}</Text>
//         <Text style={styles.userEmail}>{item.email}</Text>
//       </View>
//       <TouchableOpacity onPress={() => handleEdit(item.id)}>
//         <MaterialIcons name="edit" size={24} color="#4CAF50" style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => handleDelete(item.id)}>
//         <MaterialIcons name="delete" size={24} color="#F44336" style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id}
//         renderItem={renderUserItem}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   userItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     elevation: 2, // For Android shadow
//     shadowColor: '#000', // For iOS shadow
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1,
//     marginBottom: 10,
//   },
//   userImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25, // Circle image
//     marginRight: 15,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#777',
//   },
//   icon: {
//     marginLeft: 10,
//   },
// });

// export default UserListScreen;

// import React, { useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../redux/slices/userSlice';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const UserListScreen = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.userList);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (userId) => {
//     navigation.navigate('EditProfile', { userId });
//   };

//   const handleDelete = (userId) => {
//     Alert.alert(
//       "Delete User",
//       "Are you sure you want to delete this user?",
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Delete",
//           style: "destructive",
//           onPress: async () => {
//             const updatedUsers = users.filter(user => user.id !== userId);
//             await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
//             dispatch(fetchUsers());
//           }
//         }
//       ]
//     );
//   };

//   const renderUserItem = ({ item }) => (
//     <View style={styles.userItem}>
//       <Image source={{ uri: item.image }} style={styles.userImage} />
//       <View style={styles.userInfo}>
//         <Text style={styles.username}>{item.username}</Text>
//         <Text style={styles.userEmail}>{item.email}</Text>
//       </View>
//       <TouchableOpacity onPress={() => handleEdit(item.id)}>
//         <MaterialIcons name="edit" size={24} color="#4CAF50" style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => handleDelete(item.id)}>
//         <MaterialIcons name="delete" size={24} color="#F44336" style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id.toString()} // Ensure item.id is unique and converted to string
//         renderItem={renderUserItem}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   userItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     elevation: 2,
//     marginBottom: 10,
//   },
//   userImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 15,
//   },
//   userInfo: {
//     flex: 1,
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#777',
//   },
//   icon: {
//     marginLeft: 10,
//   },
// });

// export default UserListScreen;
import React from 'react';
import { View, Text, Button } from 'react-native';


const MyCourses = () => {
  

  return (
    <View>
      <Text>Welcome to the MyCourses Screen</Text>
      <Button title="Logout" />
    </View>
  );
};

export default MyCourses;