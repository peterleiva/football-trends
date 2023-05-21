import { HydratedDocument, ObjectId, Schema, model } from 'mongoose';
import { Position } from './position.enum';

/**
 * Player traits according to the FIFA 23 game using the 100 point scale
 */
export interface FifaStats {
  /**
   * Overall rating of the player using the 100 point scale according to the
   * FIFA 23 game
   */
  overall: number;
  /**
   * Potential rating of the player using the 100 point scale according to the
   * FIFA 23 game
   */
  potential: number;
  year: number;
  paceTotal: number;
  shootingTotal: number;
  passingTotal: number;
  dribblingTotal: number;
  defendingTotal: number;
  physicalityTotal: number;
  crossing: number;
  finishing: number;
  headingAccuracy: number;
  shortPassing: number;
  volleys: number;
  dribbling: number;
  curve: number;
  freekickAccuracy: number;
  longPassing: number;
  ballControl: number;
  acceleration: number;
  sprintSpeed: number;
  agility: number;
  reactions: number;
  balance: number;
  shotPower: number;
  jumping: number;
  stamina: number;
  strength: number;
  longShots: number;
  aggression: number;
  interceptions: number;
  positioning: number;
  vision: number;
  penalties: number;
  composure: number;
  marking: number;
  standingTackle: number;
  slidingTackle: number;

  goalKeeper: {
    diving: number;
    handling: number;
    kicking: number;
    positioning: number;
    reflexes: number;
  };
  ratingByPosition: Record<Position, number>;

  playerId: ObjectId;
}

export type FifaStatsDocument = HydratedDocument<FifaStats>;

const ratingByPositionSchema = new Schema<FifaStats['ratingByPosition']>({
  ST: { type: Number, min: 0, max: 100 },
  LW: { type: Number, min: 0, max: 100 },
  LF: { type: Number, min: 0, max: 100 },
  CF: { type: Number, min: 0, max: 100 },
  RF: { type: Number, min: 0, max: 100 },
  RW: { type: Number, min: 0, max: 100 },
  CAM: { type: Number, min: 0, max: 100 },
  LM: { type: Number, min: 0, max: 100 },
  CM: { type: Number, min: 0, max: 100 },
  RM: { type: Number, min: 0, max: 100 },
  LWB: { type: Number, min: 0, max: 100 },
  CDM: { type: Number, min: 0, max: 100 },
  RWB: { type: Number, min: 0, max: 100 },
  LB: { type: Number, min: 0, max: 100 },
  CB: { type: Number, min: 0, max: 100 },
  RB: { type: Number, min: 0, max: 100 },
  GK: { type: Number, min: 0, max: 100 },
});

const goalKepperSchema = new Schema<FifaStats['goalKeeper']>({
  diving: { type: Number, min: 0, max: 100 },
  handling: { type: Number, min: 0, max: 100 },
  kicking: { type: Number, min: 0, max: 100 },
  positioning: { type: Number, min: 0, max: 100 },
  reflexes: { type: Number, min: 0, max: 100 },
});

const schema = new Schema<FifaStats>({
  playerId: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  overall: {
    type: Number,
    min: 0,
    max: 100,
  },
  potential: {
    type: Number,
    min: 0,
    max: 100,
  },
  paceTotal: {
    type: Number,
    min: 0,
    max: 100,
  },
  shootingTotal: {
    type: Number,
    min: 0,
    max: 100,
  },
  passingTotal: {
    type: Number,
    min: 0,
    max: 100,
  },
  dribblingTotal: {
    type: Number,
    min: 0,
    max: 100,
  },
  defendingTotal: {
    type: Number,
    min: 0,
    max: 100,
  },
  physicalityTotal: {
    type: Number,
    min: 0,
    max: 100,
  },
  crossing: {
    type: Number,
    min: 0,
    max: 100,
  },
  finishing: {
    type: Number,
    min: 0,
    max: 100,
  },
  headingAccuracy: {
    type: Number,
    min: 0,
    max: 100,
  },
  shortPassing: {
    type: Number,
    min: 0,
    max: 100,
  },
  volleys: {
    type: Number,
    min: 0,
    max: 100,
  },
  dribbling: {
    type: Number,
    min: 0,
    max: 100,
  },
  curve: {
    type: Number,
    min: 0,
    max: 100,
  },
  freekickAccuracy: {
    type: Number,
    min: 0,
    max: 100,
  },
  longPassing: {
    type: Number,
    min: 0,
    max: 100,
  },
  ballControl: {
    type: Number,
    min: 0,
    max: 100,
  },
  acceleration: {
    type: Number,
    min: 0,
    max: 100,
  },
  sprintSpeed: {
    type: Number,
    min: 0,
    max: 100,
  },
  agility: {
    type: Number,
    min: 0,
    max: 100,
  },
  reactions: {
    type: Number,
    min: 0,
    max: 100,
  },
  balance: {
    type: Number,
    min: 0,
    max: 100,
  },
  shotPower: {
    type: Number,
    min: 0,
    max: 100,
  },
  jumping: {
    type: Number,
    min: 0,
    max: 100,
  },
  stamina: {
    type: Number,
    min: 0,
    max: 100,
  },
  strength: {
    type: Number,
    min: 0,
    max: 100,
  },
  longShots: {
    type: Number,
    min: 0,
    max: 100,
  },
  aggression: {
    type: Number,
    min: 0,
    max: 100,
  },
  interceptions: {
    type: Number,
    min: 0,
    max: 100,
  },
  positioning: {
    type: Number,
    min: 0,
    max: 100,
  },
  vision: {
    type: Number,
    min: 0,
    max: 100,
  },
  penalties: {
    type: Number,
    min: 0,
    max: 100,
  },
  composure: {
    type: Number,
    min: 0,
    max: 100,
  },
  marking: {
    type: Number,
    min: 0,
    max: 100,
  },
  standingTackle: {
    type: Number,
    min: 0,
    max: 100,
  },
  slidingTackle: {
    type: Number,
    min: 0,
    max: 100,
  },

  goalKeeper: goalKepperSchema,
  ratingByPosition: ratingByPositionSchema,
});

export const FifaStatsModel = model<FifaStatsDocument>('FifaStats', schema);
