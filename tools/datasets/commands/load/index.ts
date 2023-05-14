import bytes from 'bytes';
import Table from 'cli-table';
import { info } from 'console';
import fs, { access } from 'fs/promises';
import inquirer from 'inquirer';
import { DateTime } from 'luxon';
import path from 'path';
import { type ArgumentsCamelCase } from 'yargs';
import { fifaParser } from '../../fifa/parser';
import { listDatasets } from '../../utils';

export const command = 'load [dataset]';
export const describe = 'Load fifa dataset';

export const handler = async ({
  dataset,
}: ArgumentsCamelCase<{ dataset?: string }>) => {
  const asset = await readAsset(dataset);
  console.info('loading "%s"', path.basename(asset));

  const stats = await fs.stat(asset);
  const size = bytes.parse(stats.size);

  const table = new Table({
    head: ['Dataset', 'Size', 'Created at', 'Last Modified'],
  });

  table.push([
    path.basename(asset),
    bytes.format(size),
    DateTime.fromMillis(stats.birthtimeMs).toLocaleString(),
    DateTime.fromMillis(stats.mtimeMs).toLocaleString(),
  ]);

  info(table.toString());

  const stream = await fifaParser(asset);

  stream.on('readable', () => {
    let record: FifaCsv;

    while ((record = stream.read())) {
      console.log(record);
    }
  });
};

function getAssetPath(file: string): string {
  return path.resolve(__dirname, '../../assets', file);
}

async function readAsset(dataset?: string): Promise<string> {
  let asset: string;

  if (dataset) {
    asset = getAssetPath(dataset);

    try {
      await access(asset, fs.constants.R_OK);
    } catch (err) {
      console.error(`Dataset ${dataset} not readable`);
      process.exit(1);
    }
  } else {
    try {
      const datasets = await listDatasets();
      const { dataset } = await inquirer.prompt([
        {
          type: 'list',
          name: 'dataset',
          message: 'Select one of these datasets',
          choices: datasets,
        },
      ]);

      asset = getAssetPath(dataset);
    } catch (err) {
      console.error(`Couldn't list datasets`, err);
      process.exit(1);
    }
  }

  return asset;
}
