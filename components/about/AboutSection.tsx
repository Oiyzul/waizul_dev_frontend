"use client";

import { useRef } from "react";
import Link from "next/link";

import { useSectionInView } from "@/hooks/useSectionInView";
import AnimatedText from "../AnimatedText";
import Education from "./Education";
import SectionTitle from "../SectionTitle";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionSubTitle from "../SectionSubTitle";

const AboutSection = () => {
  const containerRef = useRef(null);

  const { isInView } = useSectionInView(containerRef, "about");

  return (
    <section id="about" className="section" ref={containerRef}>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-10">
          <SectionTitle title={"About Me"} />

          <div className="flex flex-col  items-center gap-10 mt-5">
            <SectionSubTitle title="Biography" />
            <AnimatedText
              text={
                "I'm a web developer with working knowledge in JavaScript and TypeScript, and fond of frameworks like React, NextJS and Express. I love to collaborate and learn, to create efficient and user-friendly solutions to clients need."
              }
              className="text-lg sm:w-2/3"
              once
              delay={1.6}
            />
            <AnimatedText
              text={"First step is the greatest step."}
              className="italic"
              delay={3}
              once
            />

            <div className="flex items-center gap-5">
              <AnimatedText
                el="h3"
                text={"Take a look at my resume ->"}
                className="text-lg text-gray-300"
              />
              <a href={"Resume.pdf"} download>
                <button className="text-white border-2 hover:bg-black/20 hover:text-sky-500 py-2 rounded w-28">
                  Download
                </button>
              </a>
              <Link href={"Resume.pdf"} passHref>
                <button className=" text-white border-2 hover:bg-black/20 hover:text-sky-500 py-2 rounded w-28">
                  View
                </button>
              </Link>
            </div>
          </div>
          <div className="my-20">
            <Education />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutSection;
