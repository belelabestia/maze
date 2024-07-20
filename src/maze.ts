import { Size } from "./size";

type Cell = {
  walls: {
    top: Wall,
    bottom: Wall,
    left: Wall,
    right: Wall
  },
};

type Wall = {
  cells: [Cell, Cell],
  state: 'open' | 'closed',
};

export type Maze = {
  size: Size,
  cells: Cell[][],
};

export const Maze = (size: Size): Maze => {
  throw new Error('Not implemented.');
};
