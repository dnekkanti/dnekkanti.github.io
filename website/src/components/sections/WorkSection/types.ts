export enum ProjectType {
  Code = "Code",
  Photo = "Photo",
  Video = "Video",
  Writing = "Writing",
}

export enum ProjectCategory {
  Code = "Code",
  Paintings = "Paintings",
  Video = "Video",
  Writing = "Writing",
}

export interface Project {
  type: ProjectType;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  tags: string[];
  image: string; // Used for card thumbnail and photo display
  longDescription?: string;
  screenshots?: string[];
  externalUrl?: string;
}
