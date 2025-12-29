import { Container, Title, Text, Stack, Anchor } from "@mantine/core";
import Link from "next/link";

export default function Resume() {
  return (
    <Container size="md">
      <Stack gap="lg" mt="xl">
        <Title>Resume</Title>
        <Text>This is the resume page boilerplate.</Text>
        <Anchor component={Link} href="/">Back to Home</Anchor>
      </Stack>
    </Container>
  );
}
