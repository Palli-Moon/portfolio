-- CreateEnum
CREATE TYPE "Section" AS ENUM ('BIO', 'BIO_MORE', 'PROJECTS');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('EXCELLENT', 'GOOD', 'DECENT');

-- CreateEnum
CREATE TYPE "SkillCategory" AS ENUM ('PROGRAMMING', 'FRAMEWORKS', 'TOOLS', 'LANGUAGES');

-- CreateEnum
CREATE TYPE "ExperienceKind" AS ENUM ('WORK', 'EDUCATION');

-- CreateTable
CREATE TABLE "Paragraph" (
    "id" SERIAL NOT NULL,
    "section" "Section" NOT NULL,
    "order" INTEGER NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Paragraph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "level" "SkillLevel" NOT NULL,
    "category" "SkillCategory" NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "kind" "ExperienceKind" NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "tags" TEXT[],
    "description" TEXT NOT NULL,
    "descriptionLong" TEXT,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "ghlink" TEXT NOT NULL,
    "tags" TEXT[],
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Paragraph_section_order_idx" ON "Paragraph"("section", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_category_title_key" ON "Skill"("category", "title");

-- CreateIndex
CREATE INDEX "Experience_kind_startDate_idx" ON "Experience"("kind", "startDate");
