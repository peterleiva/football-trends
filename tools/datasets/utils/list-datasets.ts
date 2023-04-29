import path from 'path';
import listFiles from './list-files';

export default function listDatasets(): Promise<string[]> {
  const assetsPath = path.resolve(__dirname, '../assets');

  return listFiles(assetsPath);
}
