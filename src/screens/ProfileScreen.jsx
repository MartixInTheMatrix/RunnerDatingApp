import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserProfile from '../components/UserProfile';

function ProfileScreen() {
  const user = {
    name: 'Jean Runner',
    age: 30,
    image: 'https://via.placeholder.com/150',
    stats: {
      weeklyDistance: 50,
    },
  };

  return (
    <View style={styles.container}>
      <UserProfile {...user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
