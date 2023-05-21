import bytes from 'bytes';
import { Presets, SingleBar } from 'cli-progress';
import Table from 'cli-table';
import { info } from 'console';
import { Info } from 'csv-parse/.';
import fs, { access } from 'fs/promises';
import inquirer from 'inquirer';
import { DateTime } from 'luxon';
import path from 'path';
import { type ArgumentsCamelCase } from 'yargs';
import { FifaCsv } from '../../fifa/dataset.interface';
import { fifaParser } from '../../fifa/parser';
import { listDatasets } from '../../utils';

export const command = 'load [dataset]';
export const describe = 'Load fifa dataset';

export const handler = async ({
  dataset,
}: ArgumentsCamelCase<{ dataset?: string }>) => {
  const asset = await readAsset(dataset);

  const { size } = await showGeneralInfo(asset);

  const stream = await fifaParser(asset);

  const progressBar = new SingleBar(Presets.shades_classic);
  progressBar.start(size, 0);

  stream.on('readable', () => {
    let data: { record: FifaCsv; info: Info };

    while ((data = stream.read())) {
      const { record, info } = data;
      progressBar.update(info.bytes);
    }
  });

  stream.on('end', () => {
    progressBar.stop();
  });
};

async function showGeneralInfo(asset: string): Promise<{ size: number }> {
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

  return {
    size,
  };
}

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
