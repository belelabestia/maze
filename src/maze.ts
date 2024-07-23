import { Grid } from './grid';

declare const brand: unique symbol;

export type Maze =
  & Grid
  & { [brand]: 'Maze' };
