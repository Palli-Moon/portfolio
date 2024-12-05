export type Bio = {
  main: JSX.Element;
  extended: JSX.Element[];
};

export type Skill = {
  title: string;
  level: Level;
};

export enum Level {
  Excellent = 3,
  Good = 2,
  Decent = 1,
  Limited = 0,
}

export type CardData = {
  title: string;
  startDate: Date;
  endDate: Date;
  image: string;
  description: JSX.Element;
};
