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
