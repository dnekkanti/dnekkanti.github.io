import {
  Anchor,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";

export default function Index() {
  return (
    <Container size="md">
      <Stack gap="lg" mt="xl">
        <Title ta="center" fw={400} order={1}>
          Welcome to My Personal Website
        </Title>

        <Divider />

        <Text ta="center" size="lg">
          This is boilerplate for my personal website.

          I will fill this out with my own content eventually...
        </Text>

        <Text ta="center" size="md" c="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores distinctio itaque deleniti. Sed commodi, itaque vero magnam natus a quia vel corporis eius ipsam, dolorem exercitationem inventore molestiae cum.
        </Text>

        <Group justify="center" mt="xl">
          <Anchor component={Link} href="/resume">Resume</Anchor>
          <Anchor component={Link} href="/projects">Projects</Anchor>
          <Anchor component={Link} href="/contact">Contact</Anchor>
        </Group>
      </Stack>
    </Container>
  );
}
