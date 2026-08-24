export const CHALLENGES = [
  {
    id: 1,
    title: 'Palindrom Kontrolü',
    description: 'Bir kelimenin tersten okunduğunda da aynı olup olmadığını kontrol eden bir fonksiyon oluştur.',
    language: 'JavaScript',
    difficulty: 'Kolay',
    xp: 100,
    completed: false,
    starterCode: `function isPalindrome(text) {
    // Kodunu buraya yaz
    // Example: "level" => true, "hello" => false
}`,
    testCases: [
      { input: 'level', expected: true },
      { input: 'hello', expected: false },
      { input: 'racecar', expected: true },
    ],
  },
  {
    id: 2,
    title: 'Bir Dizideki En Büyük Sayıyı Bul',
    description: 'Verilen bir dizide en büyük sayıyı bulan bir fonksiyon oluştur.',
    language: 'JavaScript',
    difficulty: 'Kolay',
    xp: 100,
    completed: false,
    starterCode: `function findMax(arr) {
    // Kodunu buraya yaz
}`,
    testCases: [
      { input: [1, 5, 3, 9, 2], expected: 9 },
      { input: [-1, -5, -3], expected: -1 },
      { input: [42], expected: 42 },
    ],
  },
  {
    id: 3,
    title: 'FizzBuzz',
    description: '1 ile 100 arasında sayıları yazdır. 3\'ün katları için "Fizz", 5\'in katları için "Buzz", her ikisinin katı olanlar için "FizzBuzz" yazdır.',
    language: 'JavaScript',
    difficulty: 'Orta',
    xp: 150,
    completed: false,
    starterCode: `function fizzBuzz() {
    // Kodunu buraya yaz
}`,
    testCases: [
      { input: 3, expected: 'Fizz' },
      { input: 5, expected: 'Buzz' },
      { input: 15, expected: 'FizzBuzz' },
    ],
  },
];

export const DAILY_CHALLENGE = CHALLENGES[0];
