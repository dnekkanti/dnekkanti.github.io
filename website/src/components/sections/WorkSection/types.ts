export type ProjectType = "Code" | "Photo" | "Video" | "Writing";

export type ProjectCategory = "Paintings" | "Code" | "Video" | "Writing";

interface BaseProject {
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  tags: string[];
  image: string;
  longDescription?: string;
  screenshots?: string[];
  externalUrl?: string;
}

export interface CodeProject extends BaseProject {
  type: "Code";
  githubUrl?: string;
}

export interface PhotoProject extends BaseProject {
  type: "Photo";
  portfolioUrl?: string;
}

export interface VideoProject extends BaseProject {
  type: "Video";
  videoUrl: string;
}

export interface WritingProject extends BaseProject {
  type: "Writing";
  articleUrl?: string;
}

export type Project = CodeProject | PhotoProject | VideoProject | WritingProject;
