const reverse = require('../reversestring.js');

describe(reverse, function() {
  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
});
