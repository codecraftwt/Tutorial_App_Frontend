// // import React from 'react';
// // import { View, Text, Button } from 'react-native';

// // const HomeScreen = ({ navigation }) => {
// //   return (
// //     <View>
// //       <Text>Home Screen</Text>
// //       <Button
// //         title="Go to Settings"
// //         onPress={() => navigation.navigate('Settings')}
// //       />
// //     </View>
// //   );
// // };

// // export default HomeScreen;

// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Open Drawers"
//         onPress={() => navigation.openDrawer()}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = ({ navigation }) => {
//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('authToken');
//     navigation.replace('Login'); // Navigate back to login
//   };

//   return (
//     <View>
//       <Text>Welcome to the Home Screen!</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// export default HomeScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  // Dummy data for featured courses
  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development for Beginners',
      image: require('../assets/webdesign.jpg'),
    },
    {
      id: 2,
      title: 'Graphic Design Mastery',
      image: require('../assets/Graphics.png'),
    },
    {
      id: 3,
      title: 'Digital Marketing 101',
      image: require('../assets/DigitalM.jpg'),
    },
  ];

  const domains = [
    {
      id: 1,
      name: 'Cyber Security',
      icon: 'shield-lock-outline',
      totalCourses: 15,
    },
    {
      id: 2,
      name: 'Cloud Computing',
      icon: 'cloud-outline',
      totalCourses: 20,
    },
    {
      id: 3,
      name: 'Data Science',
      icon: 'database-outline',
      totalCourses: 25,
    },
    {
      id: 4,
      name: 'Digital Marketing',
      icon: 'bullhorn-outline',
      totalCourses: 10,
    },
    {
      id: 5,
      name: 'UI/UX Design',
      icon: 'palette-outline',
      totalCourses: 18,
    },
    {
      id: 6,
      name: 'Machine Learning',
      icon: 'robot-outline',
      totalCourses: 30,
    },
    {
      id: 7,
      name: 'Artificial Intelligence',
      icon: 'brain',
      totalCourses: 22,
    },
    {
      id: 8,
      name: 'Management',
      icon: 'account-tie-outline',
      totalCourses: 12,
    },
    {
      id: 9,
      name: 'Interview Preparation',
      icon: 'school-outline',
      totalCourses: 8,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on search query
  const filteredCourses = featuredCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>LearnHub</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/user.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Search Section */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for courses..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>

        {/* Featured Courses Section */}
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        <FlatList
          data={filteredCourses}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.featuredCourseCard}>
              <Image source={item.image} style={styles.featuredCourseImage} />
              <Text style={styles.featuredCourseTitle}>{item.title}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false} // Hide the horizontal scrollbar
        />

        {/* Explore Courses by Domain */}
        <Text style={styles.sectionTitle}>Explore Courses by Domain</Text>
        <FlatList
          data={domains}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.domainCard}
              onPress={() =>
                navigation.navigate('Domain', {
                  domainId: item.id,
                  domainName: item.name,
                })
              }>
              <Icon
                name={item.icon}
                size={50}
                color="#3AA6B9"
                style={styles.domainIcon}
              />
              <Text style={styles.domainName}>{item.name}</Text>
              <Text style={styles.courseCount}>
                {item.totalCourses} Courses
              </Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute', // Fix the header at the top
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#3AA6B9',
    zIndex: 10, // Ensure it stays on top of other content
  },
  logo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  scrollContainer: {
    paddingTop: 80, // Adjust top padding to leave space for the fixed header
  },
  searchContainer: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    backgroundColor: '#fff',
    borderColor: '#3AA6B9',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: '#333',
  },
  featuredCourseCard: {
    marginLeft: 15,
    marginBottom: 20,
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginRight: 15,
  },
  featuredCourseImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  featuredCourseTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  domainCard: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  domainIcon: {
    marginBottom: 10,
  },
  domainName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  courseCount: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default HomeScreen;
