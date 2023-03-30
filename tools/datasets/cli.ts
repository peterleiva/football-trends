import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

export default yargs(hideBin(process.argv))
  .scriptName('datasets')
  .commandDir('commands', {
    extensions: ['ts', 'js'],
    recurse: true,
  })
  .help()
  .parse();
