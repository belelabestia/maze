import { PosInt } from './pos-int';

it('PosInt', () => {
  expect(PosInt(NaN)).toBeNull();
  expect(PosInt(-3)).toBeNull();
  expect(PosInt(0)).toBeNull();
  expect(PosInt(12)).toBe(12);
});
