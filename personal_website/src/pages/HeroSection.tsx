"use client";

import Image from "next/image";
import { Section, Heading, SubText, ButtonPrimary } from "./Styled";

export default function HeroSection() {
  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Heading>Hi, I’m Harper</Heading>
        <SubText>
          I design and build clean, elegant digital experiences — with code and
          intention.
        </SubText>
        <ButtonPrimary href="/contact">Contact Me</ButtonPrimary>
      </div>
      <Image src="/profile.jpg" alt="Harper" width={300} height={400} />
    </Section>
  );
}
