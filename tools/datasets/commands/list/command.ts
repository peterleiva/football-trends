import bytes from 'bytes';
import fs from 'fs/promises';
import { DateTime } from 'luxon';
import path from 'path';
import util from 'util';
import { listDatasets } from '../../utils';

export const command = 'list';
export const describe = 'List all datasets files';

export const handler = async () => {
  const dir = path.resolve(__dirname, '../../assets');
  const assets = await listDatasets();

  let i = 0;

  console.log(
    util.format('%s  %s  %s', 'Date'.padEnd(20), 'Size'.padEnd(10), 'Dataset')
  );

  for await (const stat of assets.map((f) => fs.stat(path.join(dir, f)))) {
    console.log(
      '%s  %s  %s',
      DateTime.fromMillis(stat.birthtimeMs)
        .toLocal()
        .toFormat('dd-MM-yyyy HH:mm:ss')
        .padEnd(20),
      bytes(stat.size).padEnd(10),
      assets[i]
    );

    i++;
  }
};
