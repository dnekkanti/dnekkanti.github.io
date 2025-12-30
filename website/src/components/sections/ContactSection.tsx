import { Container, Title, Text, Stack, Group, Button, TextInput, Textarea, Paper, Box } from "@mantine/core";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconSend } from "@tabler/icons-react";

export function ContactSection() {
  return (
    <Container size="xl" py={100} id="contact">
      <Box style={{ position: 'relative' }}>
        {/* Blurred Content */}
        <Box style={{ filter: 'blur(8px)', pointerEvents: 'none' }}>
          <Paper radius="3rem" p={50} style={{ background: '#000', color: '#fff' }}>
            <Group align="center" justify="space-between" gap={50}>
              <Stack flex={1} gap="xl">
                <Title order={2} size="h1" fw={800} style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                  Let's work <br /> together.
                </Title>
                <Text size="xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Have a project in mind? Looking for a new collaborator? Or just want to say hi? I'd love to hear from you.
                </Text>
                <Group gap="md">
                  <Button 
                    variant="white" 
                    color="black" 
                    size="lg" 
                    radius="xl"
                    leftSection={<IconMail size={20} />}
                    component="a"
                    href="mailto:divya@example.com"
                  >
                    Email me
                  </Button>
                  <Group gap="xs">
                    <Button 
                      variant="outline" 
                      color="white" 
                      size="lg" 
                      radius="xl"
                      px="md"
                      component="a"
                      href="https://github.com/dnekkanti/"
                      target="_blank"
                    >
                      <IconBrandGithub size={24} />
                    </Button>
                    <Button 
                      variant="outline" 
                      color="white" 
                      size="lg" 
                      radius="xl"
                      px="md"
                      component="a"
                      href="https://www.linkedin.com/in/divya-nekkanti/"
                      target="_blank"
                    >
                      <IconBrandLinkedin size={24} />
                    </Button>
                  </Group>
                </Group>
              </Stack>

              <Paper p="xl" radius="lg" style={{ flex: 1, background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Stack gap="md">
                  <TextInput 
                    placeholder="Name" 
                    variant="filled" 
                    size="md"
                    styles={{ input: { background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' } }}
                  />
                  <TextInput 
                    placeholder="Email" 
                    variant="filled" 
                    size="md"
                    styles={{ input: { background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' } }}
                  />
                  <Textarea 
                    placeholder="Message" 
                    variant="filled" 
                    size="md"
                    minRows={4}
                    styles={{ input: { background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff' } }}
                  />
                  <Button color="white" c="black" size="md" radius="md" rightSection={<IconSend size={18} />}>
                    Send Message
                  </Button>
                </Stack>
              </Paper>
            </Group>
          </Paper>
        </Box>

        {/* Coming Soon Overlay */}
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          <Title
            order={1}
            style={{
              fontSize: '4rem',
              fontWeight: 900,
              color: '#ff0000',
              textAlign: 'center',
              textShadow: '0 4px 20px rgba(255, 0, 0, 0.5)',
              letterSpacing: '0.05em',
            }}
          >
            Coming Soon
          </Title>
        </Box>
      </Box>
    </Container>
  );
}
