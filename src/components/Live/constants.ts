type Sport = {
  normal: string;
  upper: string;
  lower: string;
};

export const SPORTS: { FOOTBALL: Sport; BASKETBALL: Sport; TENNIS: Sport } = {
  FOOTBALL: {
    normal: "Football",
    lower: "football",
    upper: "FOOTBALL"
  },
  BASKETBALL: {
    normal: "Basketball",
    lower: "basketball",
    upper: "FOOTBALL"
  },
  TENNIS: {
    normal: "Tennis",
    lower: "tennis",
    upper: "TENNIS"
  }
};
