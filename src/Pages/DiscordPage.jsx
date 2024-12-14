// src/Pages/DiscordPage.jsx
import React from "react";

function DiscordPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Join Our Discord</h1>
      <p className="text-gray-600">
        Join our Discord server to connect with the community, get support, and
        stay updated with the latest news!
      </p>
      <a
        href="https://discord.com/invite/your-discord-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-4"
      >
        Click here to join our Discord
      </a>
    </div>
  );
}

export default DiscordPage;
