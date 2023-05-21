import { HydratedDocument, ObjectId, Schema, model } from 'mongoose';

export interface Team {
  id: ObjectId;
  /**
   * Club name or national team name
   */
  name: string;
  /**
   * All names the team is known for
   */
  aliases: string[];
  /**
   * Indicates wether it's a national team
   */
  isNational: boolean;
  avatar?: string;
}

export type TeamDocument = HydratedDocument<Team>;

const TeamSchema = new Schema<Team>({
  name: {
    type: String,
    required: true,
    unique: true,
    text: true,
    trim: true,
  },
  aliases: {
    type: [String],
    required: true,
    text: true,
    trim: true,
  },
  isNational: {
    type: Boolean,
    default: false,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export const TeamModel = model<Team>('Team', TeamSchema);
