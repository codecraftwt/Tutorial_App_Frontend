import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Dummy data for courses
  const courses = [
    {
      id: 1,
      title: 'Advanced Python',
      description: 'Take your Python skills to the next level.',
      duration: '3 hours',
      rating: '4.8',
      image: require('../assets/python.jpg'),
    },
    {
      id: 2,
      title: 'UX/UI Design',
      description: 'Learn how to create amazing user experiences.',
      duration: '2 hours',
      rating: '4.6',
      image: require('../assets/uidesign.jpg'),
    },
    {
      id: 3,
      title: 'SEO Essentials',
      description: 'Master the art of search engine optimization.',
      duration: '1.5 hours',
      rating: '4.5',
      image: require('../assets/seo.jpg'),
    },
  ];

  const filteredCourses = courses.filter(course => 
    (selectedFilter === 'All' || course.title.includes(selectedFilter)) &&
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search for courses..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      {/* Filter Options */}
      <View style={styles.filtersContainer}>
        {['All', 'Python', 'Design', 'SEO'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selectedFilterButton
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={[
              styles.filterText,
              selectedFilter === filter && styles.selectedFilterText
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Course List */}
      <FlatList
        data={filteredCourses}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Image source={item.image} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{item.title}</Text>
              <Text style={styles.courseDescription}>{item.description}</Text>
              <Text style={styles.courseDetails}>Duration: {item.duration} | Rating: {item.rating} ⭐</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderColor: '#3AA6B9',
    borderWidth: 1,
    marginBottom: 15,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  selectedFilterButton: {
    backgroundColor: '#3AA6B9',
  },
  filterText: {
    color: '#333',
  },
  selectedFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  courseCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  courseDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  courseDetails: {
    fontSize: 12,
    color: '#555',
  },
});

export default SearchScreen;
