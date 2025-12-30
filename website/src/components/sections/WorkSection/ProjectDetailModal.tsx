import {
  Modal,
  Image,
  Text,
  Title,
  Stack,
  Group,
  Badge,
  Button,
  SimpleGrid,
  AspectRatio,
  ScrollArea,
  Box,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconCalendar,
  IconTag,
  IconExternalLink,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";
import { Project } from "./types";
import classes from "@/styles/ProjectDetailModal.module.css";

interface ProjectDetailModalProps {
  project: Project | null;
  opened: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, opened, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const renderMedia = () => {
    if (project.type === "Video") {
      return (
        <Box className={classes.mediaContainer}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={project.videoUrl}
              title={project.title}
              className={classes.videoFrame}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      );
    }

    if (project.type === "Writing") {
      return null;
    }

    if (project.image) {
      return (
        <Box className={classes.mediaContainer}>
          <Image
            src={project.image}
            alt={project.title}
            className={classes.photoFrame}
            fallbackSrc="https://placehold.co/1200x800?text=Project+Preview"
          />
        </Box>
      );
    }

    return null;
  };

  const renderHeaderActions = () => {
    if (project.type === "Code" && project.githubUrl) {
      return (
        <Button
          component="a"
          href={project.githubUrl}
          target="_blank"
          leftSection={<IconBrandGithub size={20} />}
          variant="filled"
          color="dark"
          className={`${classes.actionButton} ${classes.githubButton}`}
        >
          GitHub
        </Button>
      );
    }

    if (project.type === "Photo" && project.portfolioUrl) {
      return (
        <Button
          component="a"
          href={project.portfolioUrl}
          target="_blank"
          leftSection={<IconPhoto size={20} />}
          variant="filled"
          color="blue"
          className={classes.actionButton}
        >
          Portfolio
        </Button>
      );
    }

    if (project.type === "Video") {
      const href = project.externalUrl || project.videoUrl;
      const isExternal = !!project.externalUrl;
      
      return (
        <Button
          component="a"
          href={href}
          target="_blank"
          leftSection={isExternal ? <IconExternalLink size={20} /> : <IconVideo size={20} />}
          variant={isExternal ? "outline" : "filled"}
          color={isExternal ? "gray" : "red"}
          className={classes.actionButton}
        >
          {isExternal ? "Visit Site" : "Watch Video"}
        </Button>
      );
    }

    if (project.type === "Writing" && project.articleUrl) {
      return (
        <Button
          component="a"
          href={project.articleUrl}
          target="_blank"
          leftSection={<IconExternalLink size={20} />}
          variant="filled"
          color="gray"
          className={classes.actionButton}
        >
          Read Article
        </Button>
      );
    }

    return null;
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="85%"
      radius="32px"
      padding={24}
      transitionProps={{ transition: "slide-up", duration: 500 }}
      overlayProps={{
        backgroundOpacity: 0.6,
        blur: 15,
      }}
      scrollAreaComponent={ScrollArea.Autosize}
      withCloseButton={false}
    >
      <Stack gap={24}>
        {/* Premium Header with Action Button Inline */}
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" wrap="nowrap">
            <Group gap="md" align="center" style={{ flex: 1 }}>
              <Title className={classes.title}>{project.title}</Title>
              {renderHeaderActions()}
            </Group>
            <Button
              onClick={onClose}
              variant="subtle"
              color="gray"
              size="sm"
              className={classes.closeButton}
            >
              ✕
            </Button>
          </Group>

          <Group gap="sm">
            <Badge className={classes.metaBadge}>
              {project.year}
            </Badge>
            <Badge className={classes.metaBadge} variant="outline">
              {project.category}
            </Badge>
          </Group>

          <Text size="lg" fw={500} c="dimmed" className={classes.subheader}>
            {project.description}
          </Text>

          {project.longDescription && (
            <Text className={classes.description}>
              {project.longDescription}
            </Text>
          )}
        </Stack>

        {renderMedia()}

        {project.type !== "Writing" && project.screenshots && project.screenshots.length > 0 && (
          <Stack gap="xl">
            <Title order={3} className={classes.sectionTitle}>Project Detail Views</Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
              {project.screenshots.map((screenshot, index) => (
                <Box key={index} className={classes.mediaContainer}>
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className={classes.photoFrame}
                    fallbackSrc="https://placehold.co/800x600?text=Screenshot"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        )}
      </Stack>
    </Modal>
  );
}

