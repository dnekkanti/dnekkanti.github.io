import {
  Card,
  Text,
  Title,
  Group,
  Badge,
  Stack,
  Button,
  Overlay,
} from "@mantine/core";
import { 
  IconArrowRight, 
  IconPalette, 
  IconDeviceLaptop, 
  IconCode, 
  IconWriting, 
  IconVideo 
} from "@tabler/icons-react";
import { Project, ProjectCategory } from "./types";
import classes from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const categoryIcons: Record<ProjectCategory, React.ComponentType<{ size?: number; stroke?: number }>> = {
  Paintings: IconPalette,
  Code: IconCode,
  Video: IconVideo,
  Writing: IconWriting,
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const Icon = categoryIcons[project.category] || IconPalette;

  return (
    <Card
      radius="32px"
      className={classes.card}
      p={0}
      style={{ height: 480 }}
    >
      <div 
        className={classes.imageLayer} 
        style={{ backgroundImage: `url(${project.image})` }} 
      />

      <Overlay
        gradient="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.9) 65%, #ffffff 90%, #ffffff 100%)"
        opacity={1}
        zIndex={1}
      />

      <Stack 
        justify="space-between" 
        h="100%" 
        style={{ zIndex: 2, cursor: onClick ? 'pointer' : 'default' }} 
        p="24px"
        onClick={onClick}
      >
        <Group justify="space-between" align="center">
          <Badge
            variant="filled"
            radius="xl"
            leftSection={<Icon size={14} stroke={2.5} />}
            tt="none"
            className={classes.glassBadge}
          >
            {project.category}
          </Badge>
          <Badge
            variant="filled"
            radius="xl"
            tt="none"
            className={classes.glassBadge}
          >
            {project.year}
          </Badge>
        </Group>

        <Stack gap="xs">
          <Title order={3} className={classes.title}>
            {project.title}
          </Title>
          
          <Group align="flex-end" wrap="nowrap" justify="space-between" gap="md">
            <Text className={classes.description}>
              {project.description}
            </Text>
            
            <Button
              variant="filled"
              radius="xl"
              rightSection={<IconArrowRight size={18} stroke={2.5} />}
              className={classes.openButton}
              onClick={(e) => {
                e.stopPropagation();
                onClick?.();
              }}
            >
              Open
            </Button>
          </Group>

          <Group gap={6} mt="xs">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="filled"
                radius="xl"
                tt="none"
                className={classes.tag}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
}
