export type Bio = {
  main: JSX.Element;
  extended: JSX.Element[];
};

export type Skill = {
  title: string;
  level?: Level;
};

export enum Level {
  Excellent = 3,
  Good = 2,
  Decent = 1,
  Neutral = 0,
}

export type CardData = {
  name: string;
  title?: string;
  startDate: Date;
  endDate: Date;
  languages?: Skill[];
  description: JSX.Element;
  descriptionLong?: JSX.Element;
};
