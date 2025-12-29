import { Container, Title, Text, Stack, Anchor } from "@mantine/core";
import Link from "next/link";

export default function Projects() {
  return (
    <Container size="md">
      <Stack gap="lg" mt="xl">
        <Title>Projects</Title>
        <Text>This is the projects page boilerplate.</Text>
        <Anchor component={Link} href="/">Back to Home</Anchor>
      </Stack>
    </Container>
  );
}
