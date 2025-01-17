// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { saveUser } from '../redux/slices/userSlice';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import uuid from 'react-native-uuid';

// const ProfileScreen = ({ navigation }) => {
//   const dispatch = useDispatch();

//   // Define initial userData state
//   const initialUserData = {
//     id: uuid.v4(),
//     username: '',
//     email: '',
//     phone: '',
//     gender: '',
//     address: '',
//     image: null,
//   };

//   const [userData, setUserData] = useState(initialUserData);

//   const selectImage = () => {
//     Alert.alert(
//       "Select Image",
//       "Choose an option",
//       [
//         { text: "Camera", onPress: () => launchCamera({ mediaType: 'photo', quality: 1 }, handleImageResponse) },
//         { text: "Gallery", onPress: () => launchImageLibrary({ mediaType: 'photo', quality: 1 }, handleImageResponse) },
//         { text: "Cancel", style: "cancel" }
//       ]
//     );
//   };

//   const handleImageResponse = (response) => {
//     if (response.assets && response.assets.length > 0) {
//       setUserData({ ...userData, image: response.assets[0].uri });
//     } else {
//       Alert.alert('Error', 'Image selection failed. Please try again.');
//     }
//   };

//   const validateFields = () => {
//     const { username, email, phone, gender, address } = userData;

//     if (!username || !email || !phone || !gender || !address) {
//       Alert.alert('Validation Error', 'All fields are required.');
//       return false;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       Alert.alert('Validation Error', 'Please enter a valid email address.');
//       return false;
//     }

//     const phonePattern = /^[0-9]{10}$/;
//     if (!phonePattern.test(phone)) {
//       Alert.alert('Validation Error', 'Please enter a valid phone number (10 to 15 digits).');
//       return false;
//     }

//     return true;
//   };

//   const saveProfile = () => {
//     if (validateFields()) {
//       dispatch(saveUser(userData));
//       // Reset the form fields
//       setUserData(initialUserData);
//       // Navigate back to UserList after saving
//       navigation.navigate('UserList');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.imageContainer}>
//         <TouchableOpacity onPress={selectImage}>
//           <Image
//             source={userData.image ? { uri: userData.image } : require('../assets/user.png')}
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
//         <Text style={styles.imageText}>Select Profile Picture</Text>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Username</Text>
//         <TextInput
//           style={styles.input}
//           value={userData.username}
//           onChangeText={(text) => setUserData({ ...userData, username: text })}
//         />
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.input}
//           value={userData.email}
//           onChangeText={(text) => setUserData({ ...userData, email: text })}
//         />
//         <Text style={styles.label}>Phone</Text>
//         <TextInput
//           style={styles.input}
//           value={userData.phone}
//           onChangeText={(text) => setUserData({ ...userData, phone: text })}
//           keyboardType="numeric" // Ensures the keyboard displays numeric input
//         />
//         <Text style={styles.label}>Gender</Text>
//         <TextInput
//           style={styles.input}
//           value={userData.gender}
//           onChangeText={(text) => setUserData({ ...userData, gender: text })}
//         />
//         <Text style={styles.label}>Address</Text>
//         <TextInput
//           style={styles.input}
//           value={userData.address}
//           onChangeText={(text) => setUserData({ ...userData, address: text })}
//         />
//         <TouchableOpacity onPress={saveProfile} style={styles.saveButton}>
//           <Text style={styles.saveButtonText}>Save Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: '#ccc',
//     marginBottom: 10,
//   },
//   imageText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   inputContainer: {
//     width: '100%',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   saveButton: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default ProfileScreen;

import React from 'react';
import {View, Text, Button} from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text>Welcome to the UserList Screen</Text>
      <Button title="Logout" />
    </View>
  );
};

export default ProfileScreen;
