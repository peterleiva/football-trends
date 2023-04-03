import {
  Decimal128,
  HydratedDocument,
  ObjectId,
  Schema,
  model,
} from 'mongoose';
import { FifaStats, FifaStatsModel } from './fifa-stats.model';

// position as const
export enum Position {
  GK = 'GK',
  CB = 'CB',
  LB = 'LB',
  RB = 'RB',
  RWB = 'RWB',
  LWB = 'LWB',
  CDM = 'CDM',
  CM = 'CM',
  LM = 'LM',
  RM = 'RM',
  CF = 'CF',
  ST = 'ST',
  LW = 'LW',
  LF = 'LF',
  RF = 'RF',
  RW = 'RW',
  CAM = 'CAM',
}

export enum Foot {
  Left = 'Left',
  Right = 'Right',
  Both = 'Both',
}

export interface Player {
  id: ObjectId;
  name: string;
  knwonAs: string[];
  preferredFoot?: Foot;
  /**
   * Worth value of the player in euros
   */
  value: Decimal128;
  bestPosition: Position;
  positionsPlayed: Position[];
  // nationalities: string[];
  birthDate?: Date;
  avatar?: string;
  /**
   * Height in centimeters
   */
  height: number;
  /**
   * Weight in kilograms
   */
  weight: number;

  stats?: {
    // goals in Total goals scored by player
    goals: number;
    // assists	int	Total assists by playe
    assists: number;
    // appearances	int	Total appearances by player
    appearances: number;
  };

  fifaStats?: FifaStats;
}

export type PlayerDocument = HydratedDocument<Player>;

const schema = new Schema<Player>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  knwonAs: {
    type: [String],
    required: true,
  },
  avatar: String,

  preferredFoot: {
    type: String,
    enum: Foot,
  },

  value: {
    type: Schema.Types.Decimal128,
  },
  bestPosition: {
    type: String,
    enum: Position,
  },
  positionsPlayed: {
    type: [String],
    enum: Position,
  },
  height: {
    type: Number,
    min: 0,
  },
  weight: {
    min: 0,
    type: Number,
  },
  birthDate: Date,
  fifaStats: {
    type: Schema.Types.ObjectId,
    ref: FifaStatsModel,
  },
});

export const PlayerModel = model('Player', schema);
