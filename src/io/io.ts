import * as Core from 'core';
import { cell as make } from './cell';

export type Maze = string[];

export const printMaze = (rows: Core.Maze): string[][][] => (
  rows.map((row, i) => row.map((cell, j) => {
    if (i === 0 && j === 0) return make(cell);

    if (i === 0) return make(cell).map(x => x.slice(1));

    if (j === 0) return make(cell).slice(1);

    return (
      make(cell)
        .slice(1)
        .map(x => x.slice(1))
    );
  }))
);