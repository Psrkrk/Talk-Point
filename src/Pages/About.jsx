import React from "react";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textContent = [
    "Welcome to our platform! We are dedicated to creating innovative solutions that empower individuals and organizations. Our mission is to provide high-quality tools that make a difference.",
    "Our team is comprised of passionate individuals who believe in the power of technology to transform the world. Join us on this journey!",
  ];

  return (
    <motion.main
      className="about-page min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      aria-label="About Us Section"
    >
      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
        variants={itemVariants}
      >
        About Us
      </motion.h1>
      {textContent.map((text, index) => (
        <motion.p
          key={index}
          className="text-base md:text-lg text-gray-400 max-w-2xl text-center mb-4"
          variants={itemVariants}
        >
          {text}
        </motion.p>
      ))}
    </motion.main>
  );
}

export default About;
