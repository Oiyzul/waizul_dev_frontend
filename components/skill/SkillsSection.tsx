"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";

type TProps = {
  name: string;
  x: string;
  y: string;
};

const Skill = ({ name, x, y }: TProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold px-4 py-2 shadow-lg cursor-pointer absolute bg-white text-black"
      whileHover={{ backgroundColor: "black", color: "white" }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.1 }}
      //   viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="section" id="skills">
      <MaxWidthWrapper>
        <SectionTitle title="Skills" />
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill name={"HTML"} x={"-2vw"} y={"2vw"} />
          <Skill name={"CSS"} x={"-10vw"} y={"-4vw"} />
          <Skill name={"Javascript"} x={"15vw"} y={"4vw"} />
          <Skill name={"React"} x={"22vw"} y={"-5vw"} />
          <Skill name={"NextJS"} x={"27vw"} y={"3vw"} />
          <Skill name={"ExpressJS"} x={"30vw"} y={"-12vw"} />
          <Skill name={"TailwindCSS"} x={"-20vw"} y={"2vw"} />
          <Skill name={"Framer Motion"} x={"-25vw"} y={"-10vw"} />
          <Skill name={"Material UI"} x={"-27vw"} y={"10vw"} />
          <Skill name={"Shadcn"} x={"-28vw"} y={"-20vw"} />
          <Skill name={"Mongoose"} x={"36vw"} y={"-7vw"} />
          <Skill name={"MongoDB"} x={"40vw"} y={"10vw"} />
          <Skill name={"Typescript"} x={"2vw"} y={"20vw"} />
          <Skill name={"Figma"} x={"12vw"} y={"12vw"} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SkillsSection;
