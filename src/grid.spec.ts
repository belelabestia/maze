import { Grid } from './grid';
import { PosInt } from './pos-int';

it('grid', () => {
  expect(Grid(1 as PosInt)).toEqual([[{}]]);
  expect(Grid(2 as PosInt)).toEqual([[{}, {}], [{}, {}]]);
});
