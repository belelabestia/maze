import { type PosInt } from './pos-int';

export type Cell = {
  up?: Cell,
  down?: Cell,
  left?: Cell,
  right?: Cell
};

export type Grid = Cell[][];

export const grid = (size: PosInt): Grid => Array.from(
  { length: size },
  () => Array.from(
    { length: size },
    () => ({})
  )
);
