import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="contact-page min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      aria-labelledby="contact-heading"
    >
      {/* Page Heading */}
      <motion.h1
        id="contact-heading"
        className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center"
        variants={itemVariants}
      >
        Contact Me
      </motion.h1>

      {/* Contact Information */}
      <motion.div
        className="contact-info bg-black text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg"
        variants={itemVariants}
      >
        <p className="text-base md:text-lg text-gray-300 mb-4">
          Feel free to reach out for inquiries, collaborations, or any questions
          you may have.
        </p>

        {/* Email Section */}
        <motion.div className="contact-item mb-4" variants={itemVariants}>
          <h3 className="text-lg md:text-xl font-semibold">Email</h3>
          <a
            href="mailto:pankajsuman806041@gmail.com"
            className="text-blue-400 hover:text-blue-600 transition duration-300 break-all"
          >
            pankajsuman806041@gmail.com
          </a>
        </motion.div>

        {/* Phone Section */}
        <motion.div className="contact-item mb-4" variants={itemVariants}>
          <h3 className="text-lg md:text-xl font-semibold">Phone</h3>
          <a
            href="tel:+917351240931"
            className="text-blue-400 hover:text-blue-600 transition duration-300"
          >
            +91 7351240931
          </a>
        </motion.div>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div className="back-to-home mt-6 md:mt-8" variants={itemVariants}>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg"
        >
          Back to Home
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
