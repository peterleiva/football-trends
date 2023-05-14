import { Presets, SingleBar } from 'cli-progress';
import { Info, parse } from 'csv-parse';
import { constants, createReadStream } from 'fs';
import { access, stat } from 'fs/promises';
import path from 'path';
import { transform } from 'stream-transform';

type Record = string[];

export async function fifaParser(datasetPath: string) {
  let size = 0;

  if (path.extname(datasetPath) !== '.csv') {
    console.error('For now only csv files are supported');
    process.exit(1);
  }

  try {
    await access(datasetPath, constants.O_RDONLY);
  } catch (err) {
    console.error('Read mode not allowed %s ', datasetPath, err);
    process.exit(1);
  }

  try {
    const stats = await stat(datasetPath);

    if (!stats.isFile()) {
      console.error('Not a file: ', datasetPath);
      process.exit(1);
    }
  } catch (err: any) {
    console.error('Error reading stats: ', err);
    process.exit(1);
  }

  const progressBar = new SingleBar(Presets.shades_classic);
  progressBar.start(size, 0);

  const parser = parse({
    skip_empty_lines: true,
    info: true,
  });

  parser.read();

  // parser.on('readable', () => {
  //   let data;

  //   while ((data = parser.read())) {
  //     const { record, info } = data;

  //     progressBar.update(info.bytes);
  //   }
  // });

  // parser.on('error', (err) => {
  //   console.error('Error parsing: ', err);
  //   progressBar.stop();

  //   process.exit(1);
  // });

  parser.on('end', () => {
    progressBar.stop();
  });

  const transformer = transform(
    ({ record, info }: { info: Info; record: Record }) => {
      // console.log('transformer', info);
      progressBar.update(info.bytes);
    }
  );

  const stream = createReadStream(datasetPath, { mode: constants.O_RDONLY });
  stream.pipe(parser).pipe(transformer);

  return transformer;
}
