module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/**/__tests__/**/*.(unit|test).(js|jsx|ts|tsx)', '<rootDir>/tdd-handwrite/**/*.(unit|test).(js|jsx|ts|tsx)'],
    moduleFileExtensions: ['js',],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
  };
  