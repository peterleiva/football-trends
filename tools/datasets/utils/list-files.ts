import { exec } from 'child_process';
import path from 'path';

/**
 * List all files recursevily relative to a directory, excluding some extensions
 *
 * @example listFiles('datasets/', ['.txt', '.json'])
 *  ['datasets/000001.jpg', 'datasets/subdirectory/000002.jpg']
 *
 */
export default function listFiles(
  dir: string,
  excludeExtensions: string[] = []
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const cmd = `find ${dir} -type f ! -name "\.*" | sort -d`;

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      }

      if (stderr) {
        reject(stderr);
      }

      const files = stdout
        .split('\n')
        .filter(Boolean)
        .map((file) => path.relative(dir, file))
        .filter((file) =>
          excludeExtensions.every((ext) => !ext.endsWith(path.extname(file)))
        );

      resolve(files);
    });
  });
}
