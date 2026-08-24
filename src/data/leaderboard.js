export const LEADERBOARD_USERS = [
  {
    id: 1,
    username: 'CodeMaster',
    xp: 8420,
    level: 12,
    rank: 1,
    avatar: '👨‍💻',
    completedChallenges: 95,
  },
  {
    id: 2,
    username: 'JSKing',
    xp: 7950,
    level: 11,
    rank: 2,
    avatar: '🧑‍💻',
    completedChallenges: 88,
  },
  {
    id: 3,
    username: 'PythonPro',
    xp: 7420,
    level: 11,
    rank: 3,
    avatar: '👩‍💻',
    completedChallenges: 82,
  },
  {
    id: 4,
    username: 'AlgoMaster',
    xp: 6850,
    level: 10,
    rank: 4,
    avatar: '🧑‍💼',
    completedChallenges: 76,
  },
  {
    id: 5,
    username: 'ReactNinja',
    xp: 6320,
    level: 9,
    rank: 5,
    avatar: '👨‍🎓',
    completedChallenges: 71,
  },
];

export const getCurrentUserRank = (userXP) => {
  const userRank = LEADERBOARD_USERS.findIndex(user => user.xp <= userXP) + 1;
  return userRank || LEADERBOARD_USERS.length + 1;
};
