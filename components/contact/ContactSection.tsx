"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AtTheRateSvg from "./AtTheRateSvg";
import ContactForm from "./ContactForm";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactSection = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { isInView } = useSectionInView(containerRef, "contact");
  
  const isTextInView = useInView(textRef, { margin: "-100px" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formRef.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(result.text);
          setLoading(false);
          //@ts-ignore
          formRef?.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="section w-full max-w-screen-xl mx-auto"
      ref={containerRef}
    >
      {/* <h1 className="text-7xl text-center font-bold text-gray-500 my-10">
        Contact Me
      </h1> */}
      {/* <SectionHeader subTitle='Feel free to contact me' title='Contact' /> */}

      <motion.div
        // ref={textRef}
        className="m-auto flex items-center justify-center gap-12"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="flex-1 flex flex-col gap-10" variants={variants}>
          <motion.h1 variants={variants} className="text-7xl text-gray-300">
            Let’s work together
          </motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span className="font-light">whatsup</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span className="font-light">Hello street New York</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span className="font-light">+1 234 5678</span>
          </motion.div>
        </motion.div>
        <div className="flex-1 relative">
          <motion.div
            className=" stroke-white m-auto absolute -z-10"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <AtTheRateSvg isInView={isInView} />
          </motion.div>
          <div ref={formRef}>

          <ContactForm handleSubmit={handleSubmit} loading={loading} error={error} success={success} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
