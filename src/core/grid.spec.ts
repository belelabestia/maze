import { grid } from './grid';
import { type PosInt } from './pos-int';

it('grid', () => {
  expect(grid(1 as PosInt)).toEqual([[{}]]);
  expect(grid(2 as PosInt)).toEqual([[{}, {}], [{}, {}]]);
});
