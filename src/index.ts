import { Maze } from './maze';
import { Size } from './size';

const main = () => {
  const size = Size(process.argv[0]);
  if (size === null) return;

  const maze = Maze(size);
  console.log(maze);
};

main();
