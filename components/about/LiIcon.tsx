import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }: { reference: any }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-white">
      <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-white stroke-1 fill-none"
        />
        <motion.circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-[5px] stroke-white"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={"75"}
          cy={"50"}
          r={"10"}
          className="stroke-1 fill-white animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
