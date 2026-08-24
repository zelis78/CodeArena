import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../utils/colors';

const StatCard = ({ icon, label, value, color = COLORS.cyan }) => {
  return (
    <View style={[styles.container, { borderColor: color }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBg2,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  icon: {
    fontSize: 28,
    marginBottom: 8,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StatCard;
