import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found flex flex-col items-center justify-center min-h-screen bg-gray-950 text-sky-400">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-sky-600 text-white py-2 px-6 rounded-md hover:bg-sky-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
