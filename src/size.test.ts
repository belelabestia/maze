import { Size } from "./size";

it('Size works', () => {
  expect(Size(undefined)).toBeNull();
  expect(Size(0)).toBeNull();
  expect(Size('-3')).toBeNull();
  expect(Size('a')).toBeNull();
  expect(Size(-2)).toBeNull();

  expect(Size('12')).toBe(12);
  expect(Size(42)).toBe(42);
});
