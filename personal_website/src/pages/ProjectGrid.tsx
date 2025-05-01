"use client";

import { Section, Heading, Grid } from "./Styled";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <Section>
      <Heading>Featured Projects</Heading>
      <Grid>
        <ProjectCard
          title="Voice Classifier"
          subtitle="Emotion detection from audio"
          imageUrl="/project1.png"
        />
        <ProjectCard
          title="Mental Health AI"
          subtitle="Chatbot for emotional support"
          imageUrl="/project2.png"
        />
        <ProjectCard
          title="Pet Rescue App"
          subtitle="International logistics for animal rescue"
          imageUrl="/project3.png"
        />
        <ProjectCard
          title="Job Crawler"
          subtitle="ML-powered job parsing system"
          imageUrl="/project4.png"
        />
      </Grid>
    </Section>
  );
}
