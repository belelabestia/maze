import { getSizeFromArgs } from './size';

it('getSizeFromArgv0 works', () => {
  expect(getSizeFromArgs([])).toBeNull();
  expect(getSizeFromArgs(['-3'])).toBeNull();
  expect(getSizeFromArgs(['a'])).toBeNull();

  expect(getSizeFromArgs(['12'])).toBe(12);
});
