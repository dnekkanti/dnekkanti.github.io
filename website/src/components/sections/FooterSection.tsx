import { Container, Text, Group, Box } from "@mantine/core";
import classes from "@/styles/FooterSection.module.css";

interface FooterSectionProps {
  handleScroll: (e: React.MouseEvent<any>, id: string) => void;
}

export function FooterSection({ handleScroll }: FooterSectionProps) {
  return (
    <div className={classes.wrapper}>
      <Container size="xl">
        <footer className={classes.footer}>
          <Text className={classes.copyright}>
            © {new Date().getFullYear()} Divya Nekkanti. All rights reserved.
          </Text>
          <Group className={classes.links}>
            <a href="#work" className={classes.link} onClick={(e) => handleScroll(e, "work")}>Work</a>
            <a href="#resume" className={classes.link} onClick={(e) => handleScroll(e, "resume")}>Resume</a>
            <a href="#contact" className={classes.link} onClick={(e) => handleScroll(e, "contact")}>Contact</a>
          </Group>
        </footer>
      </Container>
    </div>
  );
}
