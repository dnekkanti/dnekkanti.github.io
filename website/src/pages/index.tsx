import { useState } from "react";
import {
  Box,
  Container,
  Text,
} from "@mantine/core";
import { WorkSection } from "@/components/sections/WorkSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { IntroSection } from "@/components/sections/IntroSection";
import classes from "@/styles/Home.module.css";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleScroll = (e: React.MouseEvent<any>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update hash without jump
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <Box className={classes.root}>
      <HeaderSection 
        handleScroll={handleScroll} 
      />

      <IntroSection 
        handleScroll={handleScroll} 
        onCategoryChange={setActiveCategory}
      />

      {/* Sections */}
      <WorkSection 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ResumeSection />
      <ContactSection />
      <FooterSection handleScroll={handleScroll} />
    </Box>
  );
}
