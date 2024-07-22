declare const brand: unique symbol;

export type PosInt =
  & number
  & { [brand]: 'PosInt' };
