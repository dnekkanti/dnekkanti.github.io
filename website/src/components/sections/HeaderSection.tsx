import { Box, Group, ActionIcon, Text, Anchor } from "@mantine/core";
import Link from "next/link";
import { IconStarFilled, IconVolume, IconVolumeOff } from "@tabler/icons-react";
import classes from "@/styles/Home.module.css";

interface HeaderSectionProps {
  handleScroll: (e: React.MouseEvent<any>, id: string) => void;
}

export function HeaderSection({ handleScroll }: HeaderSectionProps) {
  return (
    <Box className={classes.navbar}>
      <Group justify="space-between" h="100%">
        <Group gap="sm">
          <ActionIcon color="black" radius="xl" size="md" variant="filled" component={Link} href="/">
            <IconStarFilled size={16} />
          </ActionIcon>
          <Text fw={700} size="sm">
            Portfolio
          </Text>
          <Text c="dimmed" size="xs">
            / Divya Nekkanti
          </Text>
        </Group>

        <Group gap="xl">
          <Anchor 
            href="#work" 
            className={classes.navLink}
            onClick={(e) => handleScroll(e, "work")}
          >
            Work
          </Anchor>
          <Anchor 
            href="#resume" 
            className={classes.navLink}
            onClick={(e) => handleScroll(e, "resume")}
          >
            Resume
          </Anchor>
          <Anchor 
            href="#contact" 
            className={classes.navLink}
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </Anchor>
        </Group>

      </Group>
    </Box>
  );
}
