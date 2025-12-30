import { Container, Stack, Title, Text, Group, Button, SimpleGrid, Anchor } from "@mantine/core";
import { 
  IconSparkles, 
  IconMail, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconPalette, 
  IconLayoutNavbar, 
  IconCode, 
  IconInfoCircle 
} from "@tabler/icons-react";
import classes from "@/styles/Home.module.css";

interface IntroSectionProps {
  handleScroll: (e: React.MouseEvent<any>, id: string) => void;
}

export function IntroSection({ handleScroll }: IntroSectionProps) {
  return (
    <Container size="xl">
      <div className={classes.heroSection}>
        {/* Left Column */}
        <Stack gap="xs">
          <Title className={classes.mainTitle} order={1}>
            Divya Nekkanti
          </Title>

          <Text className={classes.tagline}>
            I build playful products and paint bright worlds.
          </Text>

          <Text className={classes.description}>
            A portfolio for gouache paintings, UI/UX explorations, and coding
            projects.
          </Text>

          <Group gap="md" mt="sm">
            <Button
              className={classes.actionButton}
              color="black"
              rightSection={<IconMail size={20} />}
              component="a"
              href="#contact"
              onClick={(e: any) => handleScroll(e, "contact")}
            >
              Say hi
            </Button>
            <Button
              variant="outline"
              className={classes.socialButton}
              leftSection={<IconBrandGithub size={20} />}
              component="a"
              href="https://github.com/dnekkanti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              className={classes.socialButton}
              leftSection={<IconBrandLinkedin size={20} />}
              component="a"
              href="https://www.linkedin.com/in/divya-nekkanti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Group>

          <SimpleGrid cols={3} spacing="md" mt={40}>
            <Anchor 
              href="#work" 
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={(e) => handleScroll(e, "work")}
            >
              <div className={classes.miniCard}>
                <Group gap="xs" mb={8}>
                  <IconPalette size={18} />
                  <Text fw={700} size="sm">
                    Paintings
                  </Text>
                </Group>
                <Text size="xs" c="dimmed">
                  Gouache studies + finished pieces.
                </Text>
              </div>
            </Anchor>

            <Anchor 
              href="#work" 
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={(e) => handleScroll(e, "work")}
            >
              <div className={classes.miniCard}>
                <Group gap="xs" mb={8}>
                  <IconLayoutNavbar size={18} />
                  <Text fw={700} size="sm">
                    Writing
                  </Text>
                </Group>
                <Text size="xs" c="dimmed">
                  Articles, poetry, and short stories.
                </Text>
              </div>
            </Anchor>

            <Anchor 
              href="#work" 
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={(e) => handleScroll(e, "work")}
            >
              <div className={classes.miniCard}>
                <Group gap="xs" mb={8}>
                  <IconCode size={18} />
                  <Text fw={700} size="sm">
                    Code
                  </Text>
                </Group>
                <Text size="xs" c="dimmed">
                  Tools and prototypes that ship.
                </Text>
              </div>
            </Anchor>
          </SimpleGrid>
        </Stack>

        {/* Right Column - Preview Card */}
        <div className={classes.previewCard}>
          <div className={classes.previewInner}>
            <div className={classes.avatarArea}>
              <img
                src="/images/avatar.png"
                alt="Divya Nekkanti"
                className={classes.avatarImage}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
