type FifaCsv = {
  name: {
    fullName: string;
    fullName: string;
  };
  overall: number;
  potential: number;
  value: string; // in euros
  positionsPlayed: string[];
  bestPosition: string;
  nationality: string;
  imageLink: string;
  age: number;
  height: string; // in cm
  weight: string; // in kg
  totalStats: number;
  baseStats: number;

  club: {
    clubName: string;
    wage: string;
    releaseClause: string;
    clubPosition: string;
    contractUntil: string;
    clubJerseyNumber: number;
    joinedOn: string;
    onLoan: string;
  };

  preferredFoot: 'LEFT' | 'RIGHT';

  weakFootRating: number;
  skillMoves: number;
  internationalReputation: number;
  national: {
    nationalTeamName: string;
    imageLinkNationalTeam: string;
    nationalTeamPosition: string;
    nationalTeamJerseyNumber: number;
  };
  attackingWorkRate: string;
  defensiveWorkRate: string;
  fifaStas: {
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

type Rating = 1 | 2 | 3 | 4 | 5;

type Position =
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
