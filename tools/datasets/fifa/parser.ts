import bytes from 'bytes';
import { Presets, SingleBar } from 'cli-progress';
import { parse } from 'csv-parse';
import { constants, createReadStream } from 'fs';
import { access, stat } from 'fs/promises';
import { DateTime } from 'luxon';
import path from 'path';

type Record = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

// TODO: mudar para receber como parâmetro
const fifaDataset = path.resolve(
  process.cwd(),
  'assets',
  'datasets',
  'fifa_23_players.csv'
);

async function main(datasetPath: string) {
  let size = 0;

  try {
    await access(datasetPath, constants.O_RDONLY);
  } catch (err) {
    console.error('Read mode not allowed: ', err);
    process.exit(1);
  }

  try {
    const stats = await stat(datasetPath);

    if (!stats.isFile()) {
      console.error('Not a file: ', datasetPath);
      process.exit(1);
    }

    size = bytes.parse(stats.size);

    console.table({
      size: bytes.format(size),
      'created at': DateTime.fromMillis(stats.birthtimeMs).toLocaleString(),
    });
  } catch (err) {
    console.error('Error reading stats: ', err);
    process.exit(1);
  }

  const progressBar = new SingleBar(Presets.shades_classic);
  progressBar.start(size, 0);

  const parser = parse({
    skip_empty_lines: true,
    info: true,
  });

  parser.on('readable', () => {
    let data;

    while ((data = parser.read())) {
      const { record, info } = data;

      progressBar.update(info.bytes);
      console.log('record', record);
    }
  });

  parser.on('error', (err) => {
    console.error('Error parsing: ', err);
    progressBar.stop();

    process.exit(1);
  });

  parser.on('end', () => {
    progressBar.stop();
    console.log('Done!');
  });

  const stream = createReadStream(datasetPath, { mode: constants.O_RDONLY });
  stream.pipe(parser);
}

main(fifaDataset);
