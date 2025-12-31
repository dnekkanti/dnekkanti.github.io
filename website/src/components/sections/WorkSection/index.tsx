import { Container, SimpleGrid, Stack, Group, Title, Text, Box } from "@mantine/core";
import { useState } from "react";
import { IconSparkles } from "@tabler/icons-react";
import { WorkFilters } from "./WorkFilters";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { useDisclosure } from "@mantine/hooks";
import { projects } from "./data";
import { Project } from "./types";
import classes from "@/styles/WorkSection.module.css";

interface WorkSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function WorkSection({ activeCategory, onCategoryChange }: WorkSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    
    if (!searchQuery) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));
    
    return matchesCategory && matchesSearch;
  });

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    open();
  };

  return (
    <Container size="xl" py={100} id="work">
      <Stack gap={60}>
        <header className={classes.header}>
          <Group gap="sm">
            <Box className={classes.iconBox}>
              <IconSparkles size={24} stroke={1.5} />
            </Box>
            <Title order={2} className={classes.sectionTitle}>
              Selected Work
            </Title>
          </Group>
          <Text size="lg" c="dimmed" maw={600} className={classes.subtitle}>
            Click to open more details. Use filters to jump
            between code, paintings, videos, and writing.
          </Text>
        </header>

        <WorkFilters
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={32}>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              onClick={() => handleOpenProject(project)}
            />
          ))}
        </SimpleGrid>
      </Stack>

      <ProjectDetailModal 
        project={selectedProject}
        opened={opened}
        onClose={close}
      />
    </Container>
  );
}
