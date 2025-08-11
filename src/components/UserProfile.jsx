import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ name, age, image, stats }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}, {age}</Text>
      <Text style={styles.stats}>Distance hebdomadaire: {stats.weeklyDistance} km</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  stats: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserProfile;
