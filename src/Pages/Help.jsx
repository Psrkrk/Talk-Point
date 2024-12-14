import React, { useState } from "react";
import { motion } from "framer-motion";

function Help() {
  const [flashMessage, setFlashMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFlashMessage("Thank you for your feedback!");
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <motion.div
      className="help-page min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={itemVariants}
      >
        Help & Support
      </motion.h1>

      {showMessage && (
        <motion.div
          className="flash-message bg-green-500 text-white py-2 px-4 rounded-lg mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {flashMessage}
        </motion.div>
      )}

      <motion.div
        className="contact-info bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-8"
        variants={itemVariants}
      >
        <p className="text-lg text-gray-300 mb-4 text-center sm:text-left">
          Need help? Feel free to reach out to us!
        </p>
        <motion.div className="contact-item mb-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold">Email</h3>
          <a
            href="mailto:pankajsuman8060412@gmail.com"
            className="text-blue-400 hover:text-blue-600 transition duration-300 block"
          >
            pankajsuman8060412@gmail.com
          </a>
        </motion.div>
        <motion.div className="contact-item mb-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold">Phone</h3>
          <a
            href="tel:+917351240931"
            className="text-blue-400 hover:text-blue-600 transition duration-300 block"
          >
            7351240931
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="feedback-form bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-lg"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Feedback Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Your Feedback
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
          >
            Submit Feedback
          </button>
        </form>
      </motion.div>

      <motion.div className="back-to-home mt-8" variants={itemVariants}>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Help;
