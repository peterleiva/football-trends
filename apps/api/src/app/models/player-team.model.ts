import { HydratedDocument, ObjectId, Schema, model } from 'mongoose';
import { PlayerModel } from './player.model';
import { Position } from './position.enum';
import { TeamModel } from './team.model';

export interface PlayerTeam {
  id: ObjectId;
  team: ObjectId;
  player: ObjectId;
  position: Position;
  jerseyNumber: number;

  // wage: number;
  // releaseClauseDate: Date;
  // contractTerminationDate: Date;
  // joinedOn: Date;
  // onLoan: boolean;
}

export type PlayerTeamDocument = HydratedDocument<PlayerTeam>;

const PlayerTeamSchema = new Schema<PlayerTeam>({
  team: {
    type: Schema.Types.ObjectId,
    ref: TeamModel,
    required: true,
    populate: {
      path: 'players',
      select: 'name',
    },
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: PlayerModel,
    required: true,
  },
  position: {
    type: String,
    enum: Position,
    required: true,
  },
  jerseyNumber: {
    type: Number,
    min: 0,
  },
});

export const PlayerTeamModel = model<PlayerTeam>(
  'PlayerTeam',
  PlayerTeamSchema
);
