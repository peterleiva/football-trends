import { Info, parse } from 'csv-parse';
import { constants, createReadStream } from 'fs';
import { access, stat } from 'fs/promises';
import path from 'path';
import { transform } from 'stream-transform';
import { parseFifaCSVRecord } from './parse-csv-record';

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
    size = stats.size;

    if (!stats.isFile()) {
      console.error('Not a file: ', datasetPath);
      process.exit(1);
    }
  } catch (err: any) {
    console.error('Error reading stats: ', err);
    process.exit(1);
  }

  const parser = parse({
    skip_empty_lines: true,
    info: true,
  });

  parser.read();

  const transformer = transform(
    ({ record, info }: { info: Info; record: Record }) => {
      return {
        info,
        record: parseFifaCSVRecord(record),
      };
    }
  );

  const stream = createReadStream(datasetPath, { mode: constants.O_RDONLY });
  stream.pipe(parser).pipe(transformer);

  return transformer;
}
