import { cell } from './cell';

it('cell', () => {
  const exp = [
    '+---+',
    '|   |',
    '+---+',
  ];

  expect(cell({})).toEqual(exp);
});
