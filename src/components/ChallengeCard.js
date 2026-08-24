import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/colors';

const ChallengeCard = ({ challenge, onPress, completed }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Kolay':
        return COLORS.success;
      case 'Orta':
        return COLORS.warning;
      case 'Zor':
        return COLORS.danger;
      default:
        return COLORS.cyan;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.header}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{challenge.title}</Text>
          {completed && (
            <Ionicons name="checkmark-circle" size={20} color={COLORS.success} style={styles.completedIcon} />
          )}
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Dil:</Text>
          <Text style={styles.value}>{challenge.language}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Zorluk:</Text>
          <Text style={[styles.value, { color: getDifficultyColor(challenge.difficulty) }]}>
            {challenge.difficulty}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Ödül:</Text>
          <Text style={[styles.value, { color: COLORS.purple }]}>+{challenge.xp} XP</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.cta}>Çöz →</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkBg2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
  },
  header: {
    marginBottom: 12,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  completedIcon: {
    marginLeft: 8,
  },
  content: {
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  value: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'flex-end',
  },
  cta: {
    color: COLORS.cyan,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ChallengeCard;
