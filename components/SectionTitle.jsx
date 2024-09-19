import AnimatedText from "./AnimatedText";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <AnimatedText
        text={title}
        el="h1"
		// once
        className="text-7xl text-gray-500 text-center tracking-wider font-bold mb-20"
      />
    </div>
  );
};

export default SectionTitle;
