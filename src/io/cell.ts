import * as Core from 'core';

export type Cell = string[];

export const cell = ({
  up,
  down,
  left,
  right
}: Core.Cell): Cell => {
  if (up && down && left && right) return [
    '+   +',
    '     ',
    '+   +'
  ];

  if (up && down && left) return [
    '+   +',
    '    |',
    '+   +'
  ];

  if (up && down && right) return [
    '+   +',
    '|    ',
    '+   +'
  ];

  if (up && down) return [
    '+   +',
    '|   |',
    '+   +'
  ];

  if (up) return [
    '+   +',
    '|   |',
    '+---+'
  ];

  if (down) return [
    '+---+',
    '|   |',
    '+   +'
  ];

  return [
    '+---+',
    '|   |',
    '+---+'
  ];
};
