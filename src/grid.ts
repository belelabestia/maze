import { PosInt } from './pos-int';

export type Cell = {
  up?: Cell,
  down?: Cell,
  left?: Cell,
  right?: Cell
};

export type Grid = Cell[][];

export const Grid = (size: PosInt): Grid => (
  Array.from(
    { length: size },
    () => Array.from(
      { length: size },
      () => ({})
    )
  )
);
