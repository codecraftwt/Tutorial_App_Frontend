import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DomainScreen = ({ route, navigation }) => {
  const { domainId, domainName } = route.params;

  // Set the header title dynamically
  useEffect(() => {
    navigation.setOptions({ title: domainName });
  }, [navigation, domainName]);

  // Dummy data for courses in each domain
  const domainCourses = {
    1: [
      {
        id: 1,
        title: 'Cyber Security 101',
        subtitle: 'Introduction to Cyber Security',
        duration: '3 hours',
        rating: 4.5,
        instructor: 'John Doe',
        about: 'Learn the basics of cybersecurity and how to protect your digital assets.',
        certificate: 'Free certificate available upon completion.',
        image: require('../assets/Graphics.png'),
      },
      {
        id: 2,
        title: 'Advanced Cyber Security',
        subtitle: 'Deep dive into Cyber Security concepts',
        duration: '5 hours',
        rating: 4.8,
        instructor: 'Jane Smith',
        about: 'An advanced course on cybersecurity techniques and tools.',
        certificate: 'Free certificate available upon completion.',
        image: require('../assets/Graphics.png'),
      },
    ],
  };

  const courses = domainCourses[domainId] || [];

  const handleCoursePress = (course) => {
    navigation.navigate('CourseDetails', { course });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCoursePress(item)}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoText}>{item.duration}</Text>
                  <View style={styles.divider} />
                  <Text style={styles.infoText}>Rating: {item.rating} ★</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  divider: {
    width: 1,
    height: 14,
    backgroundColor: '#ddd',
    marginHorizontal: 8,
  },
});

export default DomainScreen;
