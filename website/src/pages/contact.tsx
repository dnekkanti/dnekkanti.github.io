import { Container, Title, Text, Stack, Anchor } from "@mantine/core";
import Link from "next/link";

export default function Contact() {
  return (
    <Container size="md">
      <Stack gap="lg" mt="xl">
        <Title>Contact</Title>
        <Text>This is the contact page boilerplate.</Text>
        <Anchor component={Link} href="/">Back to Home</Anchor>
      </Stack>
    </Container>
  );
}
