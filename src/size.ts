import { PosInt } from './pos-int';

export const getSizeFromArgs = (args: string[]): PosInt | null => {
  const n = Number(args[0]);

  if (Number.isNaN(n)) return null;
  if (!Number.isInteger(n)) return null;
  if (n < 1) return null;

  return n as PosInt;
};
