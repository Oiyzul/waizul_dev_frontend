'use client'

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";
import AnimatedText from "../AnimatedText";
import CanvasLoader from "./CanvasLoader";
import Earth from "./Earth";

const BannerSection = () => {
  return (
    <section id="banner" className="">
      <div className="w-full h-full overflow-hidden relative">
        <div className="w-full h-[10vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col md:flex-row items-center justify-center text-center gap-4">
            <AnimatedText el="h1" text={"Hi, I'm"} className="text-4xl" />
            <AnimatedText
              el="h1"
              text={"Waizul Haque"}
              delay={0.8}
              once
              className="text-5xl text-green-500"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <AnimatedText
              el="h1"
              text={"An Aspiring"}
              className="text-4xl"
              delay={2}
              once
            />
            <AnimatedText
              el="h1"
              text={"Fullstack Developer"}
              delay={3.1}
              once
              className="text-5xl text-green-500"
            />
          </div>
        </div>
        <div className="w-screen h-screen grid place-items-center overflow-hidden">
          <Canvas>
            <Suspense fallback={<CanvasLoader />}>
              <Earth />
            </Suspense>
          </Canvas>
        </div>

        <div className="w-full grid place-content-center absolute bottom-7 z-50">
          <Link href="#about">
            <button className="w-[25px] h-[50px] rounded-[35%] border-2 border-[rgb(206,207,217)] flex items-start justify-center p-1 cursor-pointer">
              <motion.span
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="block w-[14px] h-[16px] bg-[rgb(206,207,217)] rounded-[50%]"
              ></motion.span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
