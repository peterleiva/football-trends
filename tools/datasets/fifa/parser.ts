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
    size = stats.size;

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

  parser.on('error', (err) => {
    console.error('Error parsing: ', err);
    progressBar.stop();

    process.exit(1);
  });

  parser.on('end', () => {
    progressBar.stop();
  });

  const transformer = transform(
    ({ record, info }: { info: Info; record: Record }) => {
      // console.log('transformer', info);
      progressBar.update(info.bytes);
      const [
        knownAs,
        fullName,
        potentital,
        marketValue,
        positionsPlayed,
        bestPosition,
        nationalityt,
        imageLink,
        age,
        height,
        weight,
        totalStats,
        baseStats,
        clubName,
        wage,
        releaseClause,
        clubPosition,
        clubeJerseyNumber,
        clubJoinedOn,
        onLoad,
        preferredFoot,
        weekFootRating,
        skillMoves,
        internationalReputation,
        nationalTeamName,
        nationalTeamImageLink,
        nationalTeamPosition,
        nationalTeamJerseyNumber,
        attackingWorkRate,
        defensiveWorkRate,
        paceTotal,
        ShootingTotal,
        passingTotal,
        dribblingTotal,
        defendingTotal,
        physicalTotal,
        crossing,
        finishing,
        headingAccuracy,
        shortPassing,
        volleys,
        dribbling,
        curve,
        freeKickAccuracy,
        longPassing,
        ballControl,
        acceleration,
        sprintSpeed,
        agility,
        reactions,
        balance,
        shotPower,
        jumping,
        stamina,
        strength,
        longShots,
        aggression,
        interceptions,
        positioning,
        vision,
        penalties,
        composure,
        marking,
        standingTackle,
        slidingTackle,
        gkDiving,
        gkHandling,
        gkKicking,
        gkPositioning,
        gkReflexes,
        stRating,
        lwRating,
        lfRating,
        cfRating,
        rfRating,
        rwRating,
        camRating,
        lmRating,
        cmRating,
        rmRating,
        lwbRating,
        cdmRating,
        rwbRating,
        lbRating,
        cbRating,
        rbRating,
        gkRating,
      ] = record;

      return {
        fullName,
        knownAs: [knownAs],
        value: marketValue,
        potentital,
        bestPosition,
        positionsPlayed: positionsPlayed.split(','),
      };
    }
  );

  const stream = createReadStream(datasetPath, { mode: constants.O_RDONLY });
  stream.pipe(parser).pipe(transformer);

  return transformer;
}
