import { drawMazeAsText } from './io';
import { Grid } from './grid';
import { Maze } from './maze';

const grid: Grid = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}]
];

it('should display one cell', () => {
  const exp = [
    '+---+',
    '|   |',
    '+---+',
  ];

  expect(drawMazeAsText(grid as Maze)).toBe(exp);
});

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

  expect(drawMazeAsText(grid as Maze)).toBe(exp);
});
