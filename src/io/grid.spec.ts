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

  expect(printMaze(grid as Maze)).toBe(exp);
});
