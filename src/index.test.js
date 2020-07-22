import {checkHealth} from './index.js';

test('strongHealth', () => {
  expect(checkHealth({ 'name' : 'autotest', 'health' : 80 })).toBe('healthy');
});

test('health', () => {
  expect(checkHealth({ 'name' : 'autotest', 'health' : 30 })).toBe('wounded');
});

test('lowHealth', () => {
  expect(checkHealth({ 'name' : 'autotest', 'health' : 10 })).toBe('critical');
});
