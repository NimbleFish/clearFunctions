const index = import checkHealth;

test('strongHealth', () => {
  expect(checkHealth({ 'autotest', 80 })).toBe('healthy');
});

test('health', () => {
  expect(checkHealth({ 'autotest', 30 })).toBe('wounded');
});

test('lowHealth', () => {
  expect(checkHealth({ 'autotest', 10 })).toBe('critical');
});
