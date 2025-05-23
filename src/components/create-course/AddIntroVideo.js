"use client";
import React, { useState } from "react";
import { useAddCourseVideosStore } from "@/store/addCourseVideosStore";
import { LuPlus, LuMinus } from "react-icons/lu";
import { LiaTrashAlt } from "react-icons/lia";

export default function AddIntroVideo({ id, videoIndex, video }) {
  const { removeIntroVideo, addIntroVideoTitle, addIntroVideoThumbnail } =
    useAddCourseVideosStore();

  const [isExpanded, setIsExpanded] = useState(false);

  // const [previewImgUrl, setPreviewImgUrl] = useState("");

  const handleVideoThumbnail = (e, videoIndex) => {
    const file = e.target.files[0];
    // console.log(file);

    // const imageUrl = URL.createObjectURL(file);

    addIntroVideoThumbnail(file, videoIndex); // in the store for form submission

    // setPreviewImgUrl(imageUrl); // for display
  };

  return (
    <div className="px-8 py-6 bg-[var(--background-primary)] rounded-2xl drop-shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base text-[var(--text-secondary)]">
          {videoIndex + 1} <span className="ms-4">Intro Video</span>
        </h3>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex justify-center items-center cursor-pointer"
            onClick={() => removeIntroVideo(videoIndex)}
          >
            <LiaTrashAlt className="text-2xl text-[#BEBEBE] font-bold hover:text-red-400" />
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="size-6 rounded-full flex justify-center items-center bg-[#BEBEBE] cursor-pointer transition-all duration-300"
          >
            {isExpanded ? (
              <LuMinus className="text-white font-bold" />
            ) : (
              <LuPlus className="text-white font-bold" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        <h3 className="text-[var(--text-secondary)] text-base font-normal">
          Video Title
        </h3>

        <div className="flex gap-4">
          <div className="w-4/5 flex gap-x-3">
            <div className="flex-1 space-y-7">
              <input
                id={`videoTitle-${videoIndex}`}
                type="text"
                name="videoTitle"
                value={video.videoTitle}
                className="w-full h-14 p-3.5 text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                placeholder="Type here"
                onChange={(e) => {
                  const val = e.target.value;
                  addIntroVideoTitle(val, videoIndex);
                }}
              />

              <div className="flex justify-between gap-x-10">
                <div className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer">
                  <span className="text-[var(--border-secondary)] font-semibold">
                    Module materials
                  </span>
                </div>

                <div className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer">
                  <span className="text-[var(--border-secondary)] font-semibold">
                    Add Questions
                  </span>
                </div>

                <div className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer">
                  <span className="text-[var(--border-secondary)] font-semibold">
                    Add Challenges
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="p-4 rounded-2xl bg-[#72c347] text-[var(--background-primary)] cursor-pointer"
              >
                + Add Video
              </button>
            </div>
          </div>

          <div className="w-1/5">
            <div>
              <label
                htmlFor={`videoThumbnail-${videoIndex}`}
                className="text-base text-[var(--text-secondary)] font-semibold"
              >
                {video?.videoThumbnail?.name ? (
                  <div className="w-full h-32 rounded-2xl border border-[var(--border-primary)] overflow-hidden flex justify-center items-center">
                    <img
                      src={URL.createObjectURL(video?.videoThumbnail)}
                      alt={video?.videoThumbnail?.name || "Thumbnail"}
                      className="w-full"
                    />
                  </div>
                ) : (
                  <div className="h-32 rounded-2xl bg-[var(--border-primary)] flex justify-center items-center">
                    <span className="text-[var(--text-secondary)] text-base font-normal">
                      + Add Thumbnail
                    </span>
                  </div>
                )}
                <input
                  id={`videoThumbnail-${videoIndex}`}
                  type="file"
                  accept="image/*"
                  name={video.videoThumbnail}
                  className="hidden"
                  onChange={(e) => handleVideoThumbnail(e, videoIndex)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
