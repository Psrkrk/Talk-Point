import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams(); // Fetch the roomId dynamically from the URL

  // Function to initialize the meeting
  const myMeeting = (element) => {
    if (element) {
      const appID = 1310850835; // Replace with your App ID
      const serverSecret = "4afe518111908e2d9c1fe3f1a592f202"; // Replace with your server secret

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId, // Dynamic room ID
        Date.now().toString(), // Unique user ID
        "pankaj" + Date.now() // Unique user name
      );

      // Initialize the video meeting
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element, // Pass the element as the container
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference, // Set meeting mode
        },
      });
    }
  };

  return (
    <div
      className="room"
      ref={myMeeting} // Attach the DOM element directly to the function
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
}

export default Room;
