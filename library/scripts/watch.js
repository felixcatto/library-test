import { execSync } from 'child_process';
import chokidar from 'chokidar';

chokidar.watch('./src').on('change', path => {
  console.log(path);
  const result = execSync('make build');
  console.log(result.toString());
});
