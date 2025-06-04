"use client";
import React, { useState } from "react";
import { useCreateConclusionVideosStore } from "@/store/createConclusionVideosStore";

import AddConclusionMaterials from "./AddConclusionMaterials";
import AddConclusionChallenge from "./AddConclusionChallenge";
import AddConclusionQuestions from "./AddConclusionQuestions";

import { LuPlus, LuMinus } from "react-icons/lu";
import { LiaTrashAlt } from "react-icons/lia";

export default function AddConclusionVideo({ id, videoIndex, video }) {
  const { setConclusionVideoDetails, removeConclusionVideo } =
    useCreateConclusionVideosStore();

  const [isExpanded, setIsExpanded] = useState(false);

  const [isAddConclusionMaterialOpen, setIsAddConclusionMaterialOpen] =
    useState(false);
  const [isAddConclusionQuestionsOpen, setIsAddConclusionQuestionsOpen] =
    useState(false);
  const [isAddConclusionChallengeOpen, setIsAddConclusionChallengeOpen] =
    useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setConclusionVideoDetails(name, value, videoIndex); // in the store for form submission
  };

  const handleVideoThumbnail = (e, videoIndex) => {
    const name = e.target.name;
    const file = e.target.files[0];

    setConclusionVideoDetails(name, file, videoIndex); // in the store for form submission
  };

  return (
    <div className="px-8 py-6 bg-[var(--background-primary)] rounded-2xl drop-shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base text-[var(--text-secondary)]">
          {videoIndex + 1} <span className="ms-4">Conclusion Video</span>
        </h3>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex justify-center items-center cursor-pointer"
            onClick={() => removeConclusionVideo(videoIndex)}
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
                onChange={handleOnChange}
              />

              <div className="flex justify-between gap-x-10">
                <button
                  className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                  type="button"
                  onClick={() => setIsAddConclusionMaterialOpen(true)}
                >
                  <span className="text-[var(--border-secondary)] font-semibold">
                    Module materials
                  </span>
                </button>

                <button
                  className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                  type="button"
                  onClick={() => setIsAddConclusionQuestionsOpen(true)}
                >
                  <span className="text-[var(--border-secondary)] font-semibold">
                    Add Questions
                  </span>
                </button>

                <button
                  className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                  type="button"
                  onClick={() => setIsAddConclusionChallengeOpen(true)}
                >
                  <span className="text-[var(--border-secondary)] font-semibold">
                    Add Challenges
                  </span>
                </button>
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
                htmlFor={`conclusionVideoThumbnail-${videoIndex}`}
                className="text-base text-[var(--text-secondary)] font-semibold cursor-pointer"
              >
                {video?.image?.name ? (
                  <div className="w-full h-32 rounded-2xl border border-[var(--border-primary)] overflow-hidden flex justify-center items-center">
                    <img
                      src={URL.createObjectURL(video?.image)}
                      alt={video?.image?.name || "Thumbnail"}
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
                  id={`conclusionVideoThumbnail-${videoIndex}`}
                  type="file"
                  accept="image/*"
                  name="image"
                  hidden
                  onChange={(e) => handleVideoThumbnail(e, videoIndex)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {isAddConclusionMaterialOpen && (
        <AddConclusionMaterials
          key={video.id}
          videoIndex={videoIndex}
          setIsAddConclusionMaterialOpen={setIsAddConclusionMaterialOpen}
        />
      )}

      {isAddConclusionChallengeOpen && (
        <AddConclusionChallenge
          key={video.id}
          videoIndex={videoIndex}
          setIsAddConclusionChallengeOpen={setIsAddConclusionChallengeOpen}
        />
      )}
      {isAddConclusionQuestionsOpen && (
        <AddConclusionQuestions
          key={video.id}
          videoIndex={videoIndex}
          setIsAddConclusionQuestionsOpen={setIsAddConclusionQuestionsOpen}
        />
      )}
    </div>
  );
}
