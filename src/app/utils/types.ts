export interface Skill {
  title: string;
  level?: Level;
}

export enum Level {
  Excellent = 3,
  Good = 2,
  Decent = 1,
  Neutral = 0,
}

type CardData = {
  name: string;
  languages?: Skill[];
  description: string; // Markdown
  descriptionLong?: string; // Markdown
};

export interface ExpCardData extends CardData {
  title?: string;
  startDate: Date;
  endDate?: Date;
}

export interface ProjectCardData extends CardData {
  link?: string;
  ghlink: string;
}
