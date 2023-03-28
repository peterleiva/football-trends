require('yargs')
  .scriptName('pirate-parser')
  .usage('$0 <cmd> [args]')
  .command(
    'hello [name]',
    (yargs) => {
      'welcome ter yargs!',
        yargs.positional('name', {
          type: 'string',
          default: 'Cambi',
          describe: 'the name to say hello to',
        });
    },
    function (argv) {
      console.log('hello', argv.name, 'welcome to yargs!');
    }
  )
  .help().argv;
