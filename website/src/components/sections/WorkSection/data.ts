import { Project, ProjectType, ProjectCategory } from "./types";

/**
 * Project Data Configuration
 * 
 * Fields Explained:
 * - type: The format of the project (Code, Photo, Video, Writing). Determines which card/modal template is used.
 * - title: Display name of the project.
 * - category: Grouping (e.g., Paintings, Code). Used for filtering.
 * - year: Completion or release year.
 * - description: A short 1-2 sentence teaser shown on the main grid card.
 * - longDescription: Detailed project story shown inside the modal. Supports multi-line strings.
 * - tags: Technical or creative keywords (e.g., "React", "After Effects"). Searchable in the UI.
 * - image: Primary preview image URL. Keep aspect ratios consistent for the grid.
 * - screenshots: (Optional) Array of additional image URLs displayed at the bottom of the modal.
 * - externalUrl: (Optional) Primary link for action buttons (GitHub repo, Dribbble link, Article link, etc).
 */
export const projects: Project[] = [
  {
    type: ProjectType.Photo,
    title: "Sunset Ridge Gouache",
    category: ProjectCategory.Paintings,
    year: "2025",
    description: "A small gouache study exploring punchy oranges and soft gradients",
    longDescription: "This piece was an exploration of how light interacts with high-altitude environments. I focused on using gouache's unique properties—somewhere between watercolor and oil—to create both soft atmospheric transitions and sharp, punchy highlights in the clouds.",
    tags: ["gouache", "landscape", "warm"],
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop",
    externalUrl: "https://dribbble.com",
  },
  {
    type: ProjectType.Code,
    title: "Local Video Search v1",
    category: ProjectCategory.Code,
    year: "2025",
    description: "Prototype that indexes personal footage and retrieves clips by semantic description",
    longDescription: "Built with Python and React, this tool uses CLIP embeddings to index your local video library. It allows you to search for 'a dog running on grass' and jump directly to relevant frames without any manual tagging.",
    tags: ["computer vision", "search", "apple silicon"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    externalUrl: "https://github.com/dnekkanti/local-video-search",
    screenshots: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    ]
  },
  {
    type: ProjectType.Video,
    title: "Cinematic Reel 2024",
    category: ProjectCategory.Video,
    year: "2024",
    description: "A selection of motion design work and interactive prototypes to showcase my skills",
    longDescription: "This video showcases my most recent motion design experiments, ranging from fluid UI transitions to abstract procedural animations. Each segment represents a different technical challenge in timing and easing.",
    tags: ["motion", "showreel", "after effects"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    externalUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    type: ProjectType.Writing,
    title: "Design Systems in the Age of AI",
    category: ProjectCategory.Writing,
    year: "2024",
    description: "An essay on how generative tools are reshaping the way we maintain design tokens",
    longDescription: "In this article, I explore the intersection of automated design tools and token-based design systems. I argue that the role of the designer is shifting from 'creator' to 'curator', and discuss how systems can be built to accommodate AI-generated variants without losing brand consistency.",
    tags: ["essays", "design tokens", "AI"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    externalUrl: "https://medium.com",
    screenshots: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    ]
  },
];


export const categories = ["All", ...Object.values(ProjectCategory)] as const;

