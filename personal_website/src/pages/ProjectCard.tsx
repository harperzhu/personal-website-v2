"use client";

import { Card, CardTitle, CardSubtitle } from "./Styled";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function ProjectCard({
  title,
  subtitle,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Card>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </Card>
  );
}
