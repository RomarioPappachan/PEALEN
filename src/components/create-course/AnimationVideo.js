"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { LuPlus, LuX, LuTrash2 } from "react-icons/lu";

export default function AnimationVideo({ videoIndex, setIsAddAnimationOpen }) {
  const [isDragging, setIsDragging] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

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
          onClick={() => setIsAddAnimationOpen(false)}
          className="absolute top-3 right-3 size-9 rounded-lg bg-[#DF5050] text-white flex justify-center items-center z-10 cursor-pointer"
        >
          <LuX className="text-xl" />
        </button>

        <div className="pt-6 px-6 pb-3">
          <h2 className="text-center text-sm md:text-base font-semibold text-[var(--text-secondary)]">
            Add Animation Video
          </h2>
        </div>

        {/* Upload Area */}
        <div className="p-4 pb-4 flex justify-center items-center">
          <label
            htmlFor={`animation-${videoIndex}`}
            className={`w-96 h-52 rounded-2xl border-2 flex justify-center items-center cursor-pointer overflow-hidden transition-colors ${
              isDragging
                ? "border-blue-500 bg-blue-50"
                : "border-[var(--border-primary)] bg-white"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {videoURL ? (
              <video
                src={videoURL}
                controls
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <span className="text-2xl mb-1">
                  <LuPlus />
                </span>
                <span className="font-medium text-gray-700">
                  Upload Animation Video
                </span>
              </div>
            )}
            <input
              type="file"
              accept="video/*"
              id={`animation-${videoIndex}`}
              hidden
              onChange={handleChange}
            />
          </label>
        </div>

        {/* File Info + Remove Button */}
        {videoFile && (
          <div className="text-center text-sm text-gray-700 px-4 flex flex-col items-center gap-2">
            <p className="truncate max-w-xs">{videoFile.name}</p>
            <button
              type="button"
              onClick={removeVideo}
              className="flex items-center gap-1 text-red-500 hover:underline"
            >
              <LuTrash2 className="text-base" />
              Remove Video
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
