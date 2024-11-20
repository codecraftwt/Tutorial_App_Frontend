// src/screens/CourseDetailsPage.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={course.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.subtitle}>{course.subtitle}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructor</Text>
          <Text style={styles.text}>{course.instructor}</Text>
          <View style={styles.instructorDetails}>
            <Text style={styles.detail}>Rating: {course.rating} ★</Text>
            <Text style={styles.detailDivider}>|</Text>
            <Text style={styles.detail}>Duration: {course.duration}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the Course</Text>
          <Text style={styles.text}>{course.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificate</Text>
          <Text style={styles.text}>{course.certificate}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.enrollButton} onPress={() => alert('You have enrolled successfully!')}>
        <Text style={styles.enrollButtonText}>Enroll for Free</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  instructorDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  detail: {
    fontSize: 16,
    color: '#444',
  },
  detailDivider: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#ccc',
  },
  enrollButton: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#3AA6B9',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  enrollButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CourseDetailsScreen;
