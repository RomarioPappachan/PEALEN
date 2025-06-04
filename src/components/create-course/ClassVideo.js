"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

import { LuX } from "react-icons/lu";
import ClassVideoUploader from "./ClassVideoUploader";
import ClassVideoPlayer from "./ClassVideoPlayer";

export default function ClassVideo({ videoIndex, setIsAddClassVideoOpen }) {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleVideoSelection(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleVideoSelection(file);
    }
  };

  const handleVideoSelection = (file) => {
    const maxSize = 1024 * 1024 * 1024; // 1GB
    if (file.size > maxSize) {
      alert("File is too large. Max size is 1GB.");
      return;
    }

    setVideoFile(file);
    setVideoURL(URL.createObjectURL(file));
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoURL(null);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-2 py-6">
      <div className="relative w-full max-w-3xl min-h-[400px] max-h-[90vh] bg-[var(--background-primary)] rounded-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsAddClassVideoOpen(false)}
          className="absolute top-3 right-3 size-9 rounded-lg bg-[#DF5050] text-white flex justify-center items-center z-10 cursor-pointer"
        >
          <LuX className="text-xl" />
        </button>

        <div className="pt-6 px-6 pb-3">
          <h2 className="text-center text-sm md:text-base font-semibold text-[var(--text-secondary)]">
            Add Class Video
          </h2>
        </div>

        {/* Upload Area */}

        {/* <ClassVideoUploader /> */}

        <ClassVideoPlayer />

        {/* File Info + Remove Button */}
      </div>
    </div>,
    document.body
  );
}
