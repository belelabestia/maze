import { PosInt } from './pos-int';

export type Cell = {
  up?: Cell,
  down?: Cell,
  left?: Cell,
  right?: Cell
};

export type Grid = {
  size: PosInt,
  cells: Cell[][]
};

export const Grid = (size: PosInt): Grid => ({
  size,
  cells: Array.from(
    { length: size },
    () => Array.from(
      { length: size },
      () => ({})
    )
  )
});
