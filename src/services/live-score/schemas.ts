export type LiveEventsResult = {
  total: number;
  data: Array<SingleLiveEventSchema>;
  error?: string;
};

export type SingleLiveEventSchema = {
  optionMarkets: [];
  games: [];
  participants: {
    id: number;
    participantId: number;
    name: {
      value: string;
      sign: string;
    };
    status: string;
    properties: {
      type: string;
    };
    options: [];
    source: string;
  }[];
  id: string;
  name: {
    value: string;
    sign: string;
  };
  sourceId: number;
  source: string;
  fixtureType: string;
  context: string;
  addons: {
    rule4Expected: boolean;
    isResulted: boolean;
    pricingState: string;
    participantDividend: null;
    betBuilderProvider: string;
    betBuilderId: string;
    betBuilderTradingV2FixtureId: string;
  };
  stage: string;
  liveAlert: boolean;
  scoreboard: {
    indicator: string;
    totalPoints: {
      player1: {
        255: number;
      };
      player2: {
        255: number;
      };
    };
    corners: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    redCards: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    yellowCards: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    offsides: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    throwIns: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    penalties: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    substitutions: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    goalKicks: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    freeKicks: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    scoreDetailed: {
      player1: {
        "253": number;
        "254": number;
        "255": number;
      };
      player2: {
        "253": number;
        "254": number;
        "255": number;
      };
    };
    sportId: number;
    id: string;
    period: string;
    periodId: number;
    points: [];
    score: string;
    timer: {
      running: boolean;
      base: string;
      visible: boolean;
      seconds: number;
    };
    started: boolean;
  };
  startDate: string;
  cutOffDate: string;
  sport: {
    type: string;
    isEsport: boolean;
    id: number;
    name: {
      value: string;
      sign: string;
    };
  };
  competition: {
    statistics: boolean;
    sportId: number;
    compoundId: string;
    type: string;
    id: number;
    parentId: number;
    name: {
      value: string;
      sign: string;
    };
  };
  region: {
    code: string;
    sportId: number;
    type: string;
    id: number;
    parentId: number;
    name: {
      value: string;
      sign: string;
    };
  };
  viewType: string;
  isOpenForBetting: boolean;
  isVirtual: boolean;
  taggedLocations: [];
  totalMarketsCount: number;
  conferences: [];
  marketGroups: {
    outrightMarketGroupIds: [];
    specialMarketGroupIds: [];
    type: string;
    id: number;
  };
  priceBoostCount: number;
  linkedTv1EventIds: [];
  contexts: string[];
  playerStats: [];
};
