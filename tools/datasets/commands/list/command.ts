import bytes from 'bytes';
import fs from 'fs/promises';
import { DateTime } from 'luxon';
import path from 'path';
import util from 'util';
import listDatasets from './list-datasets';

export const command = 'list';
export const describe = 'List all datasets files';

export const handler = async () => {
  const dir = path.resolve(__dirname, '../../assets');

  const files = await listDatasets(dir);

  let i = 0;

  console.log(
    util.format(
      '%s  %s  %s',
      'Arquivo'.padEnd(30),
      'Date'.padEnd(20),
      'Size'.padEnd(20)
    )
  );

  for await (const stat of files.map((f) => fs.stat(path.join(dir, f)))) {
    console.log(
      '%s  %s  %s',
      files[i].padEnd(30),
      DateTime.fromMillis(stat.birthtimeMs)
        .toLocal()
        .toFormat('dd-MM-yyyy HH:mm:ss')
        .padEnd(20),
      bytes(stat.size).padEnd(20)
    );

    i++;
  }
};
