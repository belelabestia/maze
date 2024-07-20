declare const brand: unique symbol;

export type Size =
  & number
  & { [brand]: 'size' };

type Input =
  | number
  | string
  | undefined;

type Factory = (x: Input) => Size | null;

export const Size: Factory = x => {
  const n = Number(x);

  if (Number.isNaN(n)) return null;
  if (!Number.isInteger(n)) return null;
  if (n < 1) return null;

  return n as Size;
};
