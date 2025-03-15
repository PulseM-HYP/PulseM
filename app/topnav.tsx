import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TopNav() {
  return (
    <View style={styles.container}>
      {['Home', 'Discover', '+ Create', 'Notifications', 'Me'].map((item) => (
        <TouchableOpacity key={item} style={styles.navItem}>
          <Text style={styles.navText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
