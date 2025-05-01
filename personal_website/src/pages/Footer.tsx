"use client";

import { Section, SubText } from "./Styled";

export default function Footer() {
  return (
    <Section
      style={{ textAlign: "center", fontSize: "0.875rem", color: "#666" }}
    >
      <SubText>© 2025 Harper Zhu · Built with Next.js</SubText>
    </Section>
  );
}
