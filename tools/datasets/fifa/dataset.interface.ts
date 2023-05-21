export type FifaCsv = {
  fullName: string;
  /**
   * Name, nicknames the player is known for
   */
  knownAs: string[];
  /**
   * Worth of the player in euros
   */
  marketValue: number;
  bestPosition: Position;
  positionsPlayed: Position[];
  nationality: string;
  imageLink: string;
  age: number;
  /**
   * Height in centimeters
   */
  height: number;
  /**
   * Weight in kilograms
   */
  weight: number;
  totalStats: number;
  baseStats: number;

  club: {
    clubName: string;
    /**
     * Salary of the player in euros
     */
    wage: number;
    /**
     * Release clause of the player in euros
     */
    releaseClause: number;
    clubPosition: Position;
    /**
     * Year contract ends
     */
    contractUntil: Date;
    jerseyNumber: number;
    joinedOn: Date;
    onLoan: boolean;
  };

  preferredFoot: Foot;

  /**
   * Weak foot rating of the player using the 5 point scale
   */
  weakFootRating: Rating;
  /**
   * Skill moves rating of the player using the 5 point scale
   */
  skillMoves: Rating;
  /**
   * International reputation of the player using the 5 point scale
   */
  internationalReputation: Rating;
  national?: {
    teamName?: string;
    avatar?: string;
    position?: Position;
    jerseyNumber?: number;
  };

  attackingWorkRate: WorkRate;
  defensiveWorkRate: WorkRate;

  stats?: {
    // goals	int	Total goals scored by player
    goals: number;
    // assists	int	Total assists by playe
    assists: number;
    // appearances	int	Total appearances by player
    appearances: number;
  };
  /**
   * Player traits according to the FIFA 23 game using the 100 point scale
   */
  fifaStats: {
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
      goalkeeperDiving: number;
      goalkeeperHandling: number;
      goalkeeperKicking: number;
      goalkeeperPositioning: number;
      goalkeeperReflexes: number;
    };
    ratings: {
      st: number;
      lw: number;
      lf: number;
      cf: number;
      rf: number;
      rw: number;
      cam: number;
      lm: number;
      cm: number;
      rm: number;
      lwb: number;
      cdm: number;
      rwb: number;
      lb: number;
      cb: number;
      rb: number;
      gk: number;
    };
  };
};

export type Rating = 1 | 2 | 3 | 4 | 5;

export type WorkRate = 'High' | 'Medium' | 'Low';

// TODO: transformar em enum usando o nome inteiro para ler melhor
export type Position =
  | 'GK'
  | 'CB'
  | 'LB'
  | 'RB'
  | 'RWB'
  | 'LWB'
  | 'CDM'
  | 'CM'
  | 'LM'
  | 'RM'
  | 'CF'
  | 'ST'
  | 'LW'
  | 'LF'
  | 'RF'
  | 'RW'
  | 'CAM';

export type Foot = 'Left' | 'Right' | 'Both';
