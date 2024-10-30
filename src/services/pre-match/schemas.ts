export type TableResult = {
  total: number;
  data: {
    _doc: string;
    _id: string;
    parenttableid: null;
    leaguetypeid: null;
    parenttableids: "{}";
    seasonid: string;
    maxrounds: number;
    currentround: number;
    presentationid: number;
    name: string;
    abbr: string;
    groupname: null;
    tournament: TournamentSchema;
    realcategory: CategorySchema;
    rules: {
      _doc: string;
      _id: number;
      name: string;
    };
    totalrows: number;
    tablerows: Array<TableRow>;
    tournamentid: number;
    seasontype: string;
    seasontypename: string;
    seasontypeunique: string;
    start: {
      _doc: string;
      time: string;
      date: string;
      tz: string;
      tzoffset: number;
      uts: number;
    };
    end: {
      _doc: string;
      time: string;
      date: string;
      tz: string;
      tzoffset: number;
      uts: number;
    };
    roundbyround: boolean;
    order: number;
    set: {
      id: number;
      name: string;
      headers: number[];
    }[];
    header: {
      id: number;
      name: string;
      column: string;
      tooltip: string;
      datapriority: string;
    }[];
    matchtype: {
      _doc: string;
      _id: number;
      settypeid: number;
      column: string;
    }[];
    tabletype: {
      _doc: string;
      _id: number;
      column: string;
    }[];
  }[];
  error?: string;
};

export type TournamentSchema = {
  _doc: string;
  _id: number;
  _sid: number;
  _rcid: number;
  _isk: number;
  _tid: number;
  _utid: number;
  _gender: string;
  name: string;
  abbr: string;
  ground: null;
  friendly: boolean;
  seasonid: number;
  currentseason: number;
  year: string;
  seasontype: string;
  seasontypename: string;
  seasontypeunique: string;
  livetable: number;
  cuprosterid: null;
  roundbyround: boolean;
  tournamentlevelorder: number;
  tournamentlevelname: string;
  outdated: boolean;
};

export type CategorySchema = {
  _doc: string;
  _id: number;
  _sid: number;
  _rcid: number;
  name: string;
  cc: {
    _doc: string;
    _id: number;
    a2: string;
    name: string;
    a3: string;
    ioc: string;
    continentid: number;
    continent: string;
    population: number;
  };
};

export type TableRow = {
  _doc: string;
  _id: number;
  promotion: {
    _doc: string;
    _id: number;
    name: string;
    shortname: string;
    cssclass: string;
    position: number;
  };
  changeTotal: number;
  changeHome: number;
  changeAway: number;
  drawTotal: number;
  drawHome: number;
  drawAway: number;
  goalDiffTotal: number;
  goalDiffHome: number;
  goalDiffAway: number;
  goalsAgainstTotal: number;
  goalsAgainstHome: number;
  goalsAgainstAway: number;
  goalsForTotal: number;
  goalsForHome: number;
  goalsForAway: number;
  lossTotal: number;
  lossHome: number;
  lossAway: number;
  total: number;
  home: number;
  away: number;
  pointsTotal: number;
  pointsHome: number;
  pointsAway: number;
  pos: number;
  posHome: number;
  posAway: number;
  sortPositionTotal: number;
  sortPositionHome: number;
  sortPositionAway: number;
  team: {
    _doc: string;
    _id: number;
    _sid: number;
    uid: number;
    virtual: boolean;
    name: string;
    mediumname: string;
    abbr: string;
    nickname: null;
    iscountry: boolean;
    haslogo: boolean;
  };
  winTotal: number;
  winHome: number;
  winAway: number;
};

export type LeagueType = {
  name: string;
  seasonId: string;
};

export type CategoryType = {
  category: string;
  leagues: Array<LeagueType>;
};

export type TournamentsResult = {
  total: number;
  data: {
    id: number;
    name: string;
    category: string;
    seasonId: string;
    sport: string;
  }[];
  error?: string;
};

export type FixturesResult = {
  total: number;
  data: {
    seasonId: string;
    matches: Array<FixtureMatchSchema>;
  }[];
  error?: string;
};

export type FixtureMatchSchema = {
  _doc: string;
  _id: number;
  _sid: number;
  _rcid: number;
  _tid: number;
  _utid: number;
  time: {
    _doc: string;
    time: string;
    date: string;
    tz: string;
    tzoffset: number;
    uts: number;
  };
  round: number;
  roundname: {
    _doc: string;
    _id: number;
    name: number;
  };
  week: number;
  result: {
    home: null;
    away: null;
    period: string;
    winner: string;
  };
  periods: null;
  _seasonid: number;
  teams: {
    home: {
      _doc: string;
      _id: number;
      _sid: number;
      uid: number;
      virtual: boolean;
      name: string;
      mediumname: string;
      abbr: string;
      nickname: null;
      iscountry: boolean;
      haslogo: boolean;
    };
    away: {
      _doc: string;
      _id: number;
      _sid: number;
      uid: number;
      virtual: boolean;
      name: string;
      mediumname: string;
      abbr: string;
      nickname: null;
      iscountry: boolean;
      haslogo: boolean;
    };
  };
  neutralground: boolean;
  comment: null;
  status: null;
  tobeannounced: boolean;
  postponed: boolean;
  canceled: boolean;
  inlivescore: boolean;
  stadiumid: number;
  bestof: null;
  walkover: boolean;
  retired: boolean;
  disqualified: boolean;
  matchdifficultyrating: null;
  numberofperiods: number;
};
