import { Branded } from './branded';

export type PosInt = Branded<number, 'PosInt'>;

export const posint = (x: number): PosInt | null => {
  if (Number.isNaN(x)) return null;
  if (!Number.isInteger(x)) return null;
  if (x < 1) return null;

  return x as PosInt;
};
