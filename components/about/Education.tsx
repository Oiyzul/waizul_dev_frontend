"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import AnimatedText from "../AnimatedText";
import SectionSubTitle from "../SectionSubTitle";

type TProps = {
  type: string;
  time: string;
  place: string;
  info: string;
};
const Details = ({ type, time, place, info }: TProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between text-left"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-semibold text-lg tracking-wide w-full">
          {type}
        </h3>
        <span className="capitalize font-medium text-white/75 w-full">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="">
      <SectionSubTitle title="Education" />

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 mt-10">
          <Details
            time="2023-present"
            place="Jahangirnagor University, Savar, Dhaka"
            type="Master of Science in Information Technology"
            info={
              "Jahangirnagor University is one of the oldest university in Bangladesh."
            }
          />
          <Details
            time="2022-2024"
            place="Programming Hero"
            type="Online Course Works"
            info={
              "Programming Hero is the most popular web learning platform for learning Web Development in Bangladesh."
            }
          />
          <Details
            time="2008-2012"
            place="Ahsanullah University of Science and Technology, Dhaka."
            type="Bachelor of Science in Electrical and Electronic Engineering"
            info={
              "Ahsanullah University of Science and Technology is a renowned private university in Bangladesh."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
