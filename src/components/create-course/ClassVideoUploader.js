"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import MuxUploader from "@mux/mux-uploader-react";

export default function ClassVideoUploader() {
  const [endpoint, setEndpoint] = useState("");
  const [uploadId, setUploadId] = useState(null);

  useEffect(() => {
    const fetchUploadUrl = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/getUploadUrl`
        );

        console.log(response);
        setEndpoint(response.data.url);
        setUploadId(response.data.uploadId);
      } catch (error) {
        console.error("Error fetching upload URL:", error);
      }
    };

    fetchUploadUrl();
  }, []);

  const handlePolling = () => {
    alert("Started polling...");
  };

  return (
    <div className="p-4 flex justify-center items-center">
      {!endpoint ? (
        <p>Preparing secure upload…</p>
      ) : (
        <MuxUploader
          endpoint={endpoint}
          onSuccess={(event) => {
            // const uploaderElement = event.target;
            // const uploadId = uploaderElement.getAttribute("upload-id");
            console.log("Upload ID:", uploadId);

            handlePolling();
          }}
          onError={(e) => console.error(e)}
          style={{
            width: "400px",
            height: "250px",
            border: "none",
            borderRadius: "10px",
            padding: "",
            color: "white",
            background: "#72c354",
          }}
        />
      )}
    </div>
  );
}
