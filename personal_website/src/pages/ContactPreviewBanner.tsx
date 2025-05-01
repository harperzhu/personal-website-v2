"use client";

import { Section, Heading, SubText, ButtonSecondary } from "./Styled";

export default function ContactPreviewBanner() {
  return (
    <Section style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
      <Heading>Want to work together?</Heading>
      <SubText>
        I’m open to new freelance or collaborative projects — especially in AI,
        health tech, and impact-driven work.
      </SubText>
      <ButtonSecondary href="/contact">Send a Message</ButtonSecondary>
    </Section>
  );
}
