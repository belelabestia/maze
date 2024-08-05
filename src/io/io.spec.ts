import { printMaze } from './io';
import * as Core from 'core';

const grid: Core.Grid = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}]
];

it('test', () => {
  const exp = [
    '+---+---+---+',
    '|   |   |   |',
    '+---+---+---+',
    '|   |   |   |',
    '+---+---+---+',
    '|   |   |   |',
    '+---+---+---+'
  ];

  expect(printMaze(grid as Core.Maze)).toBe(exp);
});
