import { Container, Title, Text, Stack, Group, Badge, Divider } from "@mantine/core";
import { IconBriefcase, IconSchool, IconUsers, IconTools } from "@tabler/icons-react";

const experience = [
  {
    company: "Affirm",
    role: "Senior Software Engineer — ZeroToSixty (Incubator)",
    period: "2022 - 2025",
    description: "Founding engineer for the Affirm Card ($1.176B GMV in FY25), awarded TIME's Best Inventions 2024. Led GTM and roadmap for core features including rewards, identity verification, and loan checkout.",
  },
  {
    company: "Affirm",
    role: "Software Engineer II / I — Financial Instruments",
    period: "2020 - 2022",
    description: "Led the redesign of Affirm's core repayment flow and enabled 3rd party integrations with Apple Pay, Amazon, Plaid, and Shopify. Resolved critical pipeline bugs saving millions in revenue.",
  },
  {
    company: "Adobe",
    role: "Software Engineering Intern",
    period: "2019",
    description: "Built a full-stack automation engine for creative workflows (presented at Adobe MAX 2019). Optimized complex graph processing for real-time performance.",
  },
];

const education = [
  {
    school: "Harvard University",
    degree: "MS/MBA Candidate (MS in SEAS, MBA in HBS)",
    period: "2025 - 2027",
    description: "Focus: Computer Vision, AI/ML, and Graphics. MS/MBA Class President.",
  },
  {
    school: "UC Berkeley",
    degree: "B.S. Electrical Engineering & Computer Sciences",
    period: "2016 - 2019",
    description: "Regents and Chancellor's Scholar (Top 2%). Minor in Global Poverty & Practice. 3D Animator in Undergraduate Graphics Group.",
  },
];

const community = [
  {
    organization: "Berkeley SkyDeck",
    role: "Director of Design",
    period: "2018 - 2019",
    description: "Founded the in-house design team. Led design consulting sessions for over 140 startup CEOs and helped shape the accelerator's visual identity.",
  },
  {
    organization: "Venture Strategy Solutions",
    role: "President",
    period: "2017 - 2019",
    description: "Managed 40+ members and $15,000+ budget. Spearheaded six consulting projects for startup CEOs and executive teams.",
  },
];

const technicalSkills = [
  "Python", "Java", "JavaScript", "React", "Spark", "SQL", "Android", "C", "REST", "MongoDB", "AWS", "Docker", "Kubernetes", "Git", "Vim"
];

const creativeSkills = [
  "Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Final Cut Pro", "Autodesk Maya"
];

export function ResumeSection() {
  return (
    <Container size="xl" py={120} id="resume">
      <Stack gap={80}>
        <Stack gap={0}>
          <Badge variant="light" color="black" size="lg" radius="sm" mb="md" style={{ width: 'fit-content' }}>
            RESUME
          </Badge>
          <Title order={2} size="h1" fw={800} style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Experience & <br /> Education
          </Title>
        </Stack>

        <Group align="start" gap={80}>
          {/* Left Column: Experience */}
          <Stack flex={1.2} gap={50}>
            <Group gap="md">
              <IconBriefcase size={32} stroke={1.5} />
              <Title order={3} size="h2" fw={700}>Professional Experience</Title>
            </Group>
            
            <Stack gap={40}>
              {experience.map((exp, index) => (
                <div key={index}>
                  <Group justify="space-between" align="flex-start" mb="xs" wrap="nowrap">
                    <Stack gap={4}>
                      <Text fw={800} size="xl" style={{ lineHeight: 1.2 }}>{exp.company}</Text>
                      <Text fw={600} c="black" size="md">{exp.role}</Text>
                    </Stack>
                    <Badge variant="outline" color="gray" radius="sm" size="md">
                      {exp.period}
                    </Badge>
                  </Group>
                  <Text size="md" c="dimmed" style={{ maxWidth: 600, lineHeight: 1.6 }}>
                    {exp.description}
                  </Text>
                  {index < experience.length - 1 && <Divider mt={40} opacity={0.5} />}
                </div>
              ))}
            </Stack>
          </Stack>

          {/* Right Column: Education & Community */}
          <Stack flex={1} gap={60}>
            {/* Education */}
            <Stack gap="xl">
              <Group gap="md">
                <IconSchool size={32} stroke={1.5} />
                <Title order={3} size="h2" fw={700}>Education</Title>
              </Group>
              <Stack gap={30}>
                {education.map((edu, index) => (
                  <div key={index}>
                    <Group justify="space-between" align="flex-start" mb={4}>
                      <Text fw={700} size="lg">{edu.school}</Text>
                      <Text size="sm" c="dimmed" fw={500}>{edu.period}</Text>
                    </Group>
                    <Text size="sm" fw={600} mb={4} c="black">{edu.degree}</Text>
                    <Text size="sm" c="dimmed">{edu.description}</Text>
                  </div>
                ))}
              </Stack>
            </Stack>

            {/* Community */}
            <Stack gap="xl">
              <Group gap="md">
                <IconUsers size={32} stroke={1.5} />
                <Title order={3} size="h2" fw={700}>Community</Title>
              </Group>
              <Stack gap={30}>
                {community.map((comm, index) => (
                  <div key={index}>
                    <Group justify="space-between" align="flex-start" mb={4}>
                      <Text fw={700} size="lg">{comm.organization}</Text>
                      <Text size="sm" c="dimmed" fw={500}>{comm.period}</Text>
                    </Group>
                    <Text size="sm" fw={600} mb={4} c="black">{comm.role}</Text>
                    <Text size="sm" c="dimmed">{comm.description}</Text>
                  </div>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Group>

        {/* Skills Section */}
        <Stack gap="xl" pt={60} style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
          <Group gap="md">
            <IconTools size={32} stroke={1.5} />
            <Title order={3} size="h2" fw={700}>Skills & Expertise</Title>
          </Group>
          
          <Stack gap={40}>
            <Stack gap="md">
              <Text fw={700} size="sm" tt="uppercase" lts="0.1em" c="dimmed">Technical</Text>
              <Group gap={10}>
                {technicalSkills.map(skill => (
                  <Badge key={skill} variant="filled" color="gray.1" c="black" radius="sm" px="md" py="lg" style={{ textTransform: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Stack>

            <Stack gap="md">
              <Text fw={700} size="sm" tt="uppercase" lts="0.1em" c="dimmed">Creative</Text>
              <Group gap={10}>
                {creativeSkills.map(skill => (
                  <Badge key={skill} variant="filled" color="gray.1" c="black" radius="sm" px="md" py="lg" style={{ textTransform: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Stack>
          </Stack>
        </Stack>

        {/* Interests Section */}
        <Stack gap="xl" pt={40}>
          <Text fw={700} size="sm" tt="uppercase" lts="0.1em" c="dimmed">Personal Interests</Text>
          <Text size="xl" c="dimmed" fs="italic" style={{ lineHeight: 1.5, maxWidth: 800 }}>
            "Summiting mountains across the US, backpacking, creating short films, dancing, and emceeing for every family event."
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
