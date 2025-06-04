"use client";
import React from "react";
import AddIntroVideo from "./AddIntroVideo";
import AddClassVideos from "./AddClassVideos";
import { useAddCourseVideosStore } from "@/store/addCourseVideosStore";
import { useCreateClassVideosStore } from "@/store/createClassVideosStore";
import { useCreateIntroVideosStore } from "@/store/createIntroVideosStore";
import { useCreateConclusionVideosStore } from "@/store/createConclusionVideosStore";
import AddConclusionVideo from "./AddConclusionVideo";

export default function AddCourseVideos({ onNext, onPrevious }) {
  // const {
  //   introVideos,
  //   classVideos,
  //   conclusionVideos,
  //   addNewIntroVideo,
  //   addNewClassVideo,
  //   addConclusionVideo,
  // } = useAddCourseVideosStore();
  const { introVideos, addNewIntroVideo } = useCreateIntroVideosStore();
  const { classVideos, addNewClassVideo } = useCreateClassVideosStore();
  const { conclusionVideos, addNewConclusionVideo } =
    useCreateConclusionVideosStore();

  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  console.log(introVideos);
  console.log(classVideos);
  console.log(conclusionVideos);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* Intro videos */}
        <div className="mt-4">
          <h2 className="mb-2 text-[var(--text-primary)] text-xl font-semibold">
            Class Videos (Intro videos)
          </h2>
          <div className="space-y-3">
            {introVideos?.length > 0 ? (
              introVideos.map((video, index) => (
                <AddIntroVideo
                  key={video.id}
                  id={video.id}
                  videoIndex={index}
                  video={video}
                />
              ))
            ) : (
              <p className="text-red-400 dark:text-[var(--text-secondary)]">
                Add an intro video
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="font-semibold text-lg text-[var(--text-secondary)] border-b border-[var(--text-secondary)] cursor-pointer"
              onClick={addNewIntroVideo}
            >
              + Add Module
            </button>
          </div>
        </div>

        {/* Main class videos */}
        <div className="mt-4">
          <h2 className="mb-2 text-[var(--text-primary)] text-xl font-semibold">
            Main Class Videos
          </h2>

          <div className="space-y-3">
            {classVideos.length > 0 ? (
              classVideos.map((video, index) => (
                <AddClassVideos
                  key={video.id}
                  videoIndex={index}
                  video={video}
                />
              ))
            ) : (
              <p className="text-red-400 dark:text-[var(--text-secondary)]">
                Add a class video
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="font-semibold text-lg text-[var(--text-secondary)] border-b border-[var(--text-secondary)] cursor-pointer"
              onClick={addNewClassVideo}
            >
              + Add Module
            </button>
          </div>
        </div>

        {/* Conclusion Videos */}
        <div className="mt-4">
          <h2 className="mb-2 text-[var(--text-primary)] text-xl font-semibold">
            Conclusion Videos
          </h2>

          <div className="space-y-3">
            {conclusionVideos.length > 0 ? (
              conclusionVideos.map((video, index) => (
                <AddConclusionVideo
                  key={video.id}
                  videoIndex={index}
                  video={video}
                />
              ))
            ) : (
              <p className="text-red-400 dark:text-[var(--text-secondary)]">
                Add a conclusion video
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="font-semibold text-lg text-[var(--text-secondary)] border-b border-[var(--text-secondary)] cursor-pointer"
              onClick={addNewConclusionVideo}
            >
              + Add Module
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-8 mt-[60px]">
          <button
            type="button"
            className="w-[330px] h-[54px] bg-[#9D9D9D] text-white font-semibold text-lg rounded-2xl"
            onClick={onPrevious}
          >
            Cancel
          </button>
          <button
            className="w-[330px] h-[54px] bg-[#72c347] text-white font-semibold text-lg rounded-2xl"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
