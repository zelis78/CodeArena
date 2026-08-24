export const XP_LEVELS = [
  { level: 1, requiredXP: 0, title: 'Novice Coder' },
  { level: 2, requiredXP: 250, title: 'Code Beginner' },
  { level: 3, requiredXP: 500, title: 'Script Warrior' },
  { level: 4, requiredXP: 1000, title: 'Coder' },
  { level: 5, requiredXP: 1750, title: 'Algorithm Master' },
  { level: 6, requiredXP: 2500, title: 'Code Sage' },
  { level: 7, requiredXP: 3500, title: 'Logic Wizard' },
  { level: 8, requiredXP: 5000, title: 'Code Ninja' },
  { level: 9, requiredXP: 6750, title: 'System Architect' },
  { level: 10, requiredXP: 8750, title: 'Code Legend' },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'İlk Görev',
    description: 'İlk kodlama görevini tamamladın.',
    icon: '🏅',
    condition: (stats) => stats.completedChallenges >= 1,
    earned: false,
  },
  {
    id: 2,
    title: '7 Gün Seri',
    description: '7 gün boyunca aralıksız görev tamamla.',
    icon: '🔥',
    condition: (stats) => stats.dailyStreak >= 7,
    earned: false,
  },
  {
    id: 3,
    title: '1000 XP',
    description: '1000 XP kazandın.',
    icon: '💯',
    condition: (stats) => stats.totalXP >= 1000,
    earned: false,
  },
  {
    id: 4,
    title: 'Arena Savaşçısı',
    description: '25 görev tamamla.',
    icon: '⚔️',
    condition: (stats) => stats.completedChallenges >= 25,
    earned: false,
  },
  {
    id: 5,
    title: 'Master Coder',
    description: '5000 XP kazan.',
    icon: '👑',
    condition: (stats) => stats.totalXP >= 5000,
    earned: false,
  },
];

export const getCurrentLevel = (xp) => {
  let currentLevel = 1;
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= XP_LEVELS[i].requiredXP) {
      currentLevel = XP_LEVELS[i].level;
      break;
    }
  }
  return currentLevel;
};

export const getNextLevelXP = (xp) => {
  const currentLevel = getCurrentLevel(xp);
  if (currentLevel >= XP_LEVELS.length) {
    return XP_LEVELS[XP_LEVELS.length - 1].requiredXP;
  }
  return XP_LEVELS[currentLevel].requiredXP;
};

export const getCurrentLevelTitle = (xp) => {
  const currentLevel = getCurrentLevel(xp);
  return XP_LEVELS[currentLevel - 1]?.title || 'Novice Coder';
};

export const getXPProgress = (xp) => {
  const currentLevel = getCurrentLevel(xp);
  const currentLevelXP = XP_LEVELS[currentLevel - 1]?.requiredXP || 0;
  const nextLevelXP = currentLevel < XP_LEVELS.length ? XP_LEVELS[currentLevel]?.requiredXP : currentLevelXP + 1000;
  const progressXP = xp - currentLevelXP;
  const requiredXP = nextLevelXP - currentLevelXP;
  return {
    current: progressXP,
    required: requiredXP,
    percentage: (progressXP / requiredXP) * 100,
  };
};
