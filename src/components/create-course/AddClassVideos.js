"use client";
import React, { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { LiaTrashAlt } from "react-icons/lia";
import { useAddCourseVideosStore } from "@/store/addCourseVideosStore";
import AddVideoSteps from "./AddVideoSteps";
import AddQuestionsAndChallenge from "./AddQuestionsAndChallenge";
import ClassVideo from "./ClassVideo";
import DemoVideo from "./DemoVideo";
import AnimationVideo from "./AnimationVideo";

export default function AddClassVideos({ videoIndex, video }) {
  const { addClassVideoTitle, addClassVideoThumbnail, removeClassVideo } =
    useAddCourseVideosStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const [isAddClassVideoOpen, setIsAddClassVideoOpen] = useState(false);
  const [isAddDemoVideoOpen, setIsAddDemoVideoOpen] = useState(false);
  const [isAddAnimationOpen, setIsAddAnimationOpen] = useState(false);
  const [isAddTranscriptOpen, setIsAddTranscriptOpen] = useState(false);
  const [addStepsOpen, setAddStepOpen] = useState(false);
  const [addQuestionsOpen, setAddQuestionsOpen] = useState(false);

  // const [previewImgUrl, setPreviewImgUrl] = useState("");

  const handleVideoThumbnail = (e, videoIndex) => {
    const file = e.target.files[0];
    // console.log(file);
    // const imageUrl = URL.createObjectURL(file);
    addClassVideoThumbnail(file, videoIndex); // in the store for form submission
    // setPreviewImgUrl(imageUrl); // for display
  };

  return (
    <div className="px-8 py-6 bg-[var(--background-primary)] rounded-2xl drop-shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base text-[var(--text-secondary)]">
          {videoIndex + 1} <span className="ms-4">Class Video</span>
        </h3>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex justify-center items-center cursor-pointer"
            onClick={() => removeClassVideo(videoIndex)}
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
          isExpanded ? "max-h-max mt-4" : "max-h-0"
        }`}
      >
        <div className="flex">
          <div className="w-3/4 pe-5 border-r-2 border-[#DCDCDC]">
            <div className="w-full px-3 py-2 bg-[var(--background-tertiary)] rounded-2xl">
              <div className="space-y-2">
                <h3 className="text-[var(--text-secondary)] text-base font-semibold">
                  Video Title
                </h3>
                <input
                  id="courseTitle"
                  type="text"
                  name="courseTitle"
                  className="w-full h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                  placeholder="Type here"
                />
              </div>

              <div className="space-y-2 mt-3.5">
                <h3 className="text-[var(--text-secondary)] text-base font-semibold">
                  Video subject (First window of the Tutor)
                </h3>
                <input
                  id="courseTitle"
                  type="text"
                  name="courseTitle"
                  className="w-full h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                  placeholder="Type here"
                />
              </div>

              <div className="mt-7 flex gap-3.5">
                <div className="flex-1 grid grid-cols-3 gap-5 gap-y-3">
                  <button
                    type="button"
                    className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                    onClick={() => setIsAddClassVideoOpen(true)}
                  >
                    <span className="text-[var(--border-secondary)] font-semibold text-center leading-[18px]">
                      Add Class Video
                    </span>
                  </button>
                  <div className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer">
                    <span className="text-[var(--border-secondary)] font-semibold text-center leading-[18px]">
                      Transcription (SRT)
                    </span>
                  </div>
                  <button
                    type="button"
                    className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                    onClick={() => setIsAddDemoVideoOpen(true)}
                  >
                    <span className="text-[var(--border-secondary)] font-semibold text-center leading-[18px]">
                      Demo Video
                    </span>
                  </button>
                  <button
                    type="button"
                    className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                    onClick={() => setIsAddAnimationOpen(true)}
                  >
                    <span className="text-[var(--border-secondary)] font-semibold text-center leading-[18px]">
                      Add Animation
                    </span>
                  </button>
                  <button
                    type="button"
                    className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                    onClick={() => setAddStepOpen(true)}
                  >
                    <span className="text-[var(--border-secondary)] font-semibold text-center leading-[18px]">
                      Add Steps
                    </span>
                  </button>
                  <button
                    type="button"
                    className="w-full h-12 p-3 border border-[var(--border-secondary)] rounded-2xl outline-none flex justify-center items-center cursor-pointer"
                    onClick={() => setAddQuestionsOpen(true)}
                  >
                    <span className="text-[var(--border-secondary)] font-semibold text-center leading-[18px]">
                      Add Questions & Challenges
                    </span>
                  </button>
                </div>
                <div>
                  <div className="w-44 h-28 rounded-2xl bg-[var(--border-primary)] flex justify-center items-center">
                    <label
                      htmlFor={`classVideoThumbnail-${videoIndex}`}
                      className="text-base text-[var(--text-secondary)] font-semibold cursor-pointer"
                    >
                      {video?.videoThumbnail?.name ? (
                        <div className="w-full h-28 rounded-2xl border border-[var(--border-primary)] overflow-hidden flex justify-center items-center">
                          <img
                            src={URL.createObjectURL(video?.videoThumbnail)}
                            alt={video?.videoThumbnail?.name || "Thumbnail"}
                            className="w-full"
                          />
                        </div>
                      ) : (
                        <div className="h-28 rounded-2xl bg-[var(--border-primary)] flex justify-center items-center">
                          <span className="text-[var(--text-secondary)] text-base font-normal">
                            + Upload photo
                          </span>
                        </div>
                      )}
                      <input
                        id={`classVideoThumbnail-${videoIndex}`}
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

          <div className="w-1/4 px-6 max-w-max">
            <div className="p-2 bg-[var(--background-tertiary)] rounded-2xl space-y-2">
              <div className=" grid grid-cols-2 gap-1">
                <div className="size-[88px] rounded-2xl border-2 border-[#05A8E3] bg-[#B6E9FB] border-dotted"></div>
                <div className="size-[88px] rounded-2xl border-2 border-[#B3B8B8] bg-[#F1F1F1]"></div>
                <div className="size-[88px] rounded-2xl border-2 border-[#B3B8B8] bg-[#F1F1F1]"></div>
                <div className="size-[88px] rounded-2xl border-2 border-[#B3B8B8] bg-[#F1F1F1]"></div>

                <div
                  className={`size-[88px] rounded-2xl border-2 cursor-pointer flex justify-center items-center ${
                    video.videoSteps.length > 0
                      ? "border-[#05A8E3] bg-[#B6E9FB] border-dotted"
                      : "border-[#B3B8B8] bg-[#F1F1F1]"
                  }`}
                  onClick={() => setAddStepOpen(true)}
                >
                  <span className="text-xs text-center">
                    {video.videoSteps.length > 0 ? "Video Steps ✅" : ""}
                  </span>
                </div>
                <div
                  className={`size-[88px] rounded-2xl border-2 cursor-pointer flex justify-center items-center ${
                    video?.test?.questions?.length > 0 &&
                    video?.test?.challenge !== ""
                      ? "border-[#05A8E3] bg-[#B6E9FB] border-dotted"
                      : "border-[#B3B8B8] bg-[#F1F1F1]"
                  }`}
                  onClick={() => setAddQuestionsOpen(true)}
                >
                  {video?.test?.questions?.length > 0 &&
                  video?.test?.challenge !== ""
                    ? "Q & A ✅"
                    : ""}
                </div>
              </div>
              <p className="text-center text-[var(--text-secondary)] text-[10px] leading-3.5">
                Please look at the selected area to see which slot you are
                uploading video/file.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isAddClassVideoOpen && (
        <ClassVideo
          key={video.id}
          id={video.id}
          videoIndex={videoIndex}
          setIsAddClassVideoOpen={setIsAddClassVideoOpen}
        />
      )}

      {isAddDemoVideoOpen && (
        <DemoVideo
          key={video.id}
          id={video.id}
          videoIndex={videoIndex}
          setIsAddDemoVideoOpen={setIsAddDemoVideoOpen}
        />
      )}

      {isAddAnimationOpen && (
        <AnimationVideo
          key={video.id}
          id={video.id}
          videoIndex={videoIndex}
          setIsAddAnimationOpen={setIsAddAnimationOpen}
        />
      )}

      {addStepsOpen && (
        <AddVideoSteps
          key={video.id}
          id={video.id}
          videoIndex={videoIndex}
          setAddStepOpen={setAddStepOpen}
        />
      )}
      {addQuestionsOpen && (
        <AddQuestionsAndChallenge
          key={video.id}
          id={video.id}
          videoIndex={videoIndex}
          setAddQuestionsOpen={setAddQuestionsOpen}
        />
      )}
    </div>
  );
}
