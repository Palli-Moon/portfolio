import { prisma } from './db';
import { ExperienceKind, Section, SkillCategory, SkillLevel } from '@/generated/prisma/client';
import { ExpCardData, Level, ProjectCardData, Skill } from '@/app/utils/types';

const levels: Record<SkillLevel, Level> = {
  EXCELLENT: Level.Excellent,
  GOOD: Level.Good,
  DECENT: Level.Decent,
};

const toTags = (tags: string[]): Skill[] => tags.map((title) => ({ title }));

export async function getParagraphs(section: Section): Promise<string[]> {
  const rows = await prisma.paragraph.findMany({ where: { section }, orderBy: { order: 'asc' } });
  return rows.map((r) => r.body);
}

export async function getSkills(category: SkillCategory): Promise<Skill[]> {
  const rows = await prisma.skill.findMany({ where: { category }, orderBy: { order: 'asc' } });
  return rows.map((r) => ({ title: r.title, level: levels[r.level] }));
}

export async function getExperience(kind: ExperienceKind): Promise<ExpCardData[]> {
  const rows = await prisma.experience.findMany({ where: { kind }, orderBy: { startDate: 'desc' } });
  return rows.map((r) => ({
    name: r.name,
    title: r.title ?? undefined,
    startDate: r.startDate,
    endDate: r.endDate ?? undefined,
    languages: toTags(r.tags),
    description: r.description,
    descriptionLong: r.descriptionLong ?? undefined,
  }));
}

export async function getProjects(): Promise<ProjectCardData[]> {
  const rows = await prisma.project.findMany({ orderBy: { order: 'asc' } });
  return rows.map((r) => ({
    name: r.name,
    link: r.link ?? undefined,
    ghlink: r.ghlink,
    languages: toTags(r.tags),
    description: r.description,
  }));
}
