import { Alert, Container, Stack } from "@mantine/core";
import { IconError404 } from "@tabler/icons-react";

export default function PageNotFound404() {
  return (
    <Container size="md">
      <Stack gap="lg" mt="xl">
        <Alert
          variant="filled"
          color="red"
          title="Page Not Found."
          icon={<IconError404 />}
        >
          The page you are looking for could not be found. Please check the URL
          and try again.
        </Alert>
      </Stack>
    </Container>
  );
}
