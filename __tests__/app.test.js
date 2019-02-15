import Validator from '../src/js/validator';

test('Name is correct', () => {
  const input = new Validator();

  const expected = true; // ожидает
  const received = input.validateUsername('Rick Cucumber-77'); // получает
  expect(received).toBe(expected); // сравнивает
});

test('The first letter is space = error', () => {
  const input = new Validator();

  const received = () => input.validateUsername(' Rick Cucumber-77'); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('The last letter is space = error', () => {
  const input = new Validator();

  const received = () => input.validateUsername('Rick Cucumber-77 '); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('Double space = error', () => {
  const input = new Validator();

  const received = () => input.validateUsername('Rick  Cucumber-77'); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});
