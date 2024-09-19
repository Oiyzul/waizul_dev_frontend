'use client'

// import { gsap } from "gsap";
import { useEffect, useLayoutEffect } from "react";
import { Background, Container, WelcomeText } from "./loaderStyle";

const PageLoader = () => {
  useLayoutEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".bg", {
      scale: 0.6,
      duration: 2,
      opacity: 0,
      ease: "easeOut",
      delay: 0.2,
    })
      .to(
        ".text-reveal",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          y: 0,
          stagger: 0.3,
          duration: 1,
        },
        "-=2.9"
      )
      .to(".text-reveal", {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0)",
        y: -180,
        duration: 0.2,
        delay: 0.5,
      })
      .to(".text-reveal", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        stagger: 0.3,
        duration: 0.3,
        delay: 0.5,
        opacity: 0,
      })
      .to(
        ".text-reveal",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          x: 100,
          opacity: 1,
          textAlign: "left",
          fontSize: "1rem",
          duration: 1,
          // delay: 0.6,
        },
        "+=1"
      );
  }, []);
  return (
    <section>
      <Background className="bg" />
      {/* <div className='bg' /> */}
      <Container className="welcome">
        {/* <div className='welcome'> */}
        <WelcomeText>
          {/* <div> */}
          <div className="welcome-text">
            <h1 className="text-reveal">Hello, there!</h1>
            <p className="text-reveal">How are you today!</p>
          </div>
        </WelcomeText>
      </Container>
    </section>
  );
};

export default PageLoader;
