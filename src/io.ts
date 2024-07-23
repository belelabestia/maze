import { Maze } from './maze';

export const drawMazeAsText = ({ size, cells }: Maze): string[] => {
  return cells.map(row => {
    row.map(cell => {
      return // todo;
    })
  });
};
