import { Container, Title, Text, Button, Paper } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconArrowUpRight } from "@tabler/icons-react";
import classes from "@/styles/ContactSection.module.css";

export function ContactSection() {
  return (
    <div className={classes.wrapper}>
      <Container size="xl" pt={120} pb={80} id="contact">
        <div className={classes.contactSection}>
          <header className={classes.header}>
            <Title order={2} className={classes.title}>
              Get in touch.
            </Title>
            <Text className={classes.description}>
              I'm always interested in hearing about new projects, 
              professional opportunities, or just chatting about design and code. 
              The best way to reach me is through the channels below.
            </Text>
          </header>

          <div className={classes.buttonGroup}>
            <Button 
              size="lg"
              variant="filled"
              color="white"
              className={classes.primaryButton}
              leftSection={<IconBrandLinkedin size={22} />}
              rightSection={<IconArrowUpRight size={18} />}
              component="a"
              href="https://www.linkedin.com/in/divya-nekkanti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              color="white"
              className={classes.secondaryButton}
              leftSection={<IconBrandGithub size={22} />}
              rightSection={<IconArrowUpRight size={18} />}
              component="a"
              href="https://github.com/dnekkanti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
