"use client";

import { AboutSection, BannerSection, ContactSection, PortfolioSection, SkillsSection } from "@/components";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
