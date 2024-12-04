export type Skill = {
  title: string;
  level: LevelStyle;
};

export enum LevelStyle {
  Excellent = 'mr-2 badge badge-primary',
  Good = 'mr-2 badge badge-neutral',
  Decent = 'mr-2 badge badge-secondary',
  Limited = 'mr-2 badge badge-accent',
}
