import AnimatedText from "./AnimatedText";

const SectionSubTitle = ({ title }: { title: string }) => {
  return (
    <AnimatedText
      el="h3"
      text={title}
      className="text-2xl font-semibold text-center
   text-gray-300 uppercase mb-10"
    />
  );
};

export default SectionSubTitle;
