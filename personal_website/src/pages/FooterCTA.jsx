"use client";

import { Section, Heading, ButtonPrimary } from "./Styled";

export default function FooterCTA() {
  return (
    <Section
      style={{ background: "black", color: "white", textAlign: "center" }}
    >
      <Heading>Got a project in mind?</Heading>
      <ButtonPrimary href="/contact">Let’s Talk</ButtonPrimary>
    </Section>
  );
}
