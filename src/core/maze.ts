import { type Branded } from './branded';
import { type Grid } from './grid';

export type Maze = Branded<Grid, 'Maze'>;

/** TODO: manipulates the grid and returns it marked as `Maze`. */
export const maze = (grid: Grid): Maze => {
  throw new Error('Not implemented.');
};
