import { posint } from './pos-int';

it('PosInt', () => {
  expect(posint(NaN)).toBeNull();
  expect(posint(-3)).toBeNull();
  expect(posint(0)).toBeNull();
  expect(posint(12)).toBe(12);
});
