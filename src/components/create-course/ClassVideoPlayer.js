import React from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function ClassVideoPlayer() {
  return (
    <div className="p-4 flex justify-center items-center">
      <MuxPlayer
        playbackId={"j6YmGHRnGNmmLGxIxnOs1voBXQWhVHcatsunVwZXa8s"}
        accentColor="#72c347"
        style={{
          width: "400px",
          maxHeight: "250px",
          margin: "auto",
          aspectRatio: "16 / 9",
        }}
      />
    </div>
  );
}
