import { Maze } from './maze';

export const drawMazeAsText = (rows: Maze): string[] => (
  rows.map(row => row.map(cell => (
    cell.up ? ''
    : cell.down ? ''
    : cell.left ? ''
    : cell.right ? ''
    : '+---+'
  ))
    .join()
  )
);