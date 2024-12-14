import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // Custom styles are included.
import roomImage from "../assets/img.png"; // Replace with your actual image file name.

function Home() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="homepage flex items-center justify-center min-h-screen bg-gray-950 text-sky-400 px-4">
      <div className="container flex flex-col md:flex-row items-center justify-center max-w-6xl gap-8">
        {/* Left Side: Form */}
        <div className="form-container bg-gray-900 shadow-xl rounded-lg p-8 w-full max-w-md flex-1">
          <h2 className="form-title text-3xl font-bold text-sky-400 mb-6 text-center">
            Join a Room
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="roomcode"
                className="form-label block text-sky-300 font-medium mb-2"
              >
                Room Code
              </label>
              <input
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                id="roomcode"
                name="roomcode"
                required
                placeholder="Enter your room code"
                className="input-bar w-full border border-sky-500 rounded-md p-3 bg-gray-800 text-sky-300 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="submit-button w-full bg-sky-600 text-white py-3 px-6 rounded-md hover:bg-sky-700 transition"
            >
              Enter Room
            </button>
          </form>
        </div>

        {/* Right Side: Image with Text */}
        <div className="image-container w-full md:w-1/2 flex flex-col items-center">
          <div className="relative group">
            <img
              src={roomImage}
              alt="Room Preview"
              className="rounded-lg shadow-lg w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="image-text mt-4 text-lg text-sky-300 text-center">
            Discover and connect with friends in your private room. Enter your
            unique room code to get started!
          </p>
        </div>
      </div>

      {/* Navigation Bar (Visible always on Android and desktop) */}
      <div className="navbar fixed top-0 left-0 right-0 bg-gray-900 text-sky-300 p-4 z-10">
        <div className="flex justify-between">
          <button className="nav-button text-center">
            <i className="fas fa-home"></i>
            <span className="block">Home</span>
          </button>
          <button className="nav-button text-center">
            <i className="fas fa-info-circle"></i>
            <span className="block">About</span>
          </button>
          <button className="nav-button text-center">
            <i className="fas fa-question-circle"></i>
            <span className="block">Help</span>
          </button>
          <button className="nav-button text-center">
            <i className="fas fa-envelope"></i>
            <span className="block">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
