import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  USER_PROFILE: 'user_profile',
  USER_STATS: 'user_stats',
  COMPLETED_CHALLENGES: 'completed_challenges',
  DAILY_STREAK: 'daily_streak',
  LAST_LOGIN_DATE: 'last_login_date',
  ACHIEVEMENTS: 'achievements',
};

export const getUserProfile = async () => {
  try {
    const profile = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return profile ? JSON.parse(profile) : null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

export const saveUserProfile = async (profile) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
};

export const getUserStats = async () => {
  try {
    const stats = await AsyncStorage.getItem(STORAGE_KEYS.USER_STATS);
    return stats ? JSON.parse(stats) : null;
  } catch (error) {
    console.error('Error getting user stats:', error);
    return null;
  }
};

export const saveUserStats = async (stats) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving user stats:', error);
  }
};

export const getCompletedChallenges = async () => {
  try {
    const completed = await AsyncStorage.getItem(STORAGE_KEYS.COMPLETED_CHALLENGES);
    return completed ? JSON.parse(completed) : [];
  } catch (error) {
    console.error('Error getting completed challenges:', error);
    return [];
  }
};

export const saveCompletedChallenge = async (challengeId) => {
  try {
    const completed = await getCompletedChallenges();
    if (!completed.includes(challengeId)) {
      completed.push(challengeId);
      await AsyncStorage.setItem(STORAGE_KEYS.COMPLETED_CHALLENGES, JSON.stringify(completed));
    }
  } catch (error) {
    console.error('Error saving completed challenge:', error);
  }
};

export const getDailyStreak = async () => {
  try {
    const streak = await AsyncStorage.getItem(STORAGE_KEYS.DAILY_STREAK);
    return streak ? JSON.parse(streak) : { count: 0, lastDate: null };
  } catch (error) {
    console.error('Error getting daily streak:', error);
    return { count: 0, lastDate: null };
  }
};

export const updateDailyStreak = async () => {
  try {
    const today = new Date().toDateString();
    const streak = await getDailyStreak();
    const lastDate = streak.lastDate ? new Date(streak.lastDate).toDateString() : null;

    if (lastDate === today) {
      return streak;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === yesterday.toDateString()) {
      streak.count += 1;
    } else {
      streak.count = 1;
    }

    streak.lastDate = today;
    await AsyncStorage.setItem(STORAGE_KEYS.DAILY_STREAK, JSON.stringify(streak));
    return streak;
  } catch (error) {
    console.error('Error updating daily streak:', error);
    return { count: 0, lastDate: null };
  }
};

export const getAchievements = async () => {
  try {
    const achievements = await AsyncStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return achievements ? JSON.parse(achievements) : [];
  } catch (error) {
    console.error('Error getting achievements:', error);
    return [];
  }
};

export const saveAchievements = async (achievements) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
  } catch (error) {
    console.error('Error saving achievements:', error);
  }
};
