"use client";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { LuX } from "react-icons/lu";

export default function AddCourseDetails({ onNext }) {
  const [previewImgUrl, setPreviewImgUrl] = useState("");
  const [newCoursePoint, setNewCoursePoint] = useState("");
  const [newFaculty, setNewFaculty] = useState("");

  const [courseDetails, setCourseDetails] = useState({
    courseTitle: "",
    courseDescription: "",
    courseContents: [],
    courseThumbnail: "",
    courseMaterial: "",
    faculties: [],
  });

  function handleOnChange(e) {
    const { name, value } = e.target;

    setCourseDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleCourseThumbnail(e) {
    const file = e.target.files[0];
    console.log(file);

    const imageUrl = URL.createObjectURL(file);

    setCourseDetails((prevValue) => ({
      ...prevValue,
      courseThumbnail: file,
    }));

    setPreviewImgUrl(imageUrl);
  }

  function handleCourseMaterial(e) {
    e.preventDefault();

    const file = e.target.files[0];

    setCourseDetails((prevValue) => ({
      ...prevValue,
      courseMaterial: file,
    }));
  }

  function handleClearCourseMaterial(e) {
    setCourseDetails((prevValue) => ({
      ...prevValue,
      courseMaterial: "",
    }));
  }

  const handleAddPoint = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents newline
      const trimmed = newCoursePoint.trim();
      if (trimmed !== "") {
        setCourseDetails((prevValue) => ({
          ...prevValue,
          courseContents: [...prevValue.courseContents, trimmed],
        }));
        setNewCoursePoint(""); // Clear textarea
      }
    }
  };

  const handleDeletePoint = (indexToDelete) => {
    setCourseDetails((prevValue) => ({
      ...prevValue,
      courseContents: prevValue.courseContents.filter(
        (_, idx) => idx !== indexToDelete
      ),
    }));
  };

  const handleAddFaculty = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents newline
      const trimmed = newFaculty.trim();
      if (trimmed !== "") {
        setCourseDetails((prevValue) => ({
          ...prevValue,
          faculties: [...prevValue.faculties, trimmed],
        }));
        setNewFaculty(""); // Clear textarea
      }
    }
  };

  const handleDeleteFaculty = (indexToDelete) => {
    setCourseDetails((prevValue) => ({
      ...prevValue,
      faculties: prevValue.faculties.filter((_, idx) => idx !== indexToDelete),
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(courseDetails);
    onNext();
  }

  return (
    <div>
      <h2 className="text-[var(--text-primary)] text-xl font-semibold">
        Create Course
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mt-4 flex gap-8">
          <div className="w-2/3 space-y-3.5">
            <div>
              <label
                htmlFor="courseTitle"
                className="text-base text-[var(--text-secondary)] font-semibold mt-3.5 mb-2"
              >
                Course Title
              </label>
              <input
                id="courseTitle"
                type="text"
                name="courseTitle"
                value={courseDetails.courseTitle}
                className="w-full h-14 p-3.5 text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                placeholder="Type here"
                onChange={handleOnChange}
              />
            </div>

            <div className="pb-0">
              <label
                htmlFor="courseDescription"
                className="text-base text-[var(--text-secondary)] font-semibold mt-3.5 mb-2"
              >
                Course Description
              </label>
              <textarea
                id="courseDescription"
                type="text"
                name="courseDescription"
                value={courseDetails.courseDescription}
                className="w-full min-h-56 m-0 p-3.5 text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                placeholder="Type here"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label
                htmlFor="courseContents"
                className="text-base text-[var(--text-secondary)] font-semibold mt-3.5 mb-2"
              >
                Course Contents
              </label>
              <div className="w-full min-h-32 p-3.5 rounded-2xl border border-[var(--border-primary)] focus-within:border-[var(--border-secondary)]">
                {courseDetails.courseContents.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                    {courseDetails.courseContents.map((point, index) => (
                      <li key={index} className="relative pr-6">
                        <span>{point}</span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeletePoint(index);
                          }}
                          className="absolute right-0 top-0 text-red-500 hover:text-red-700"
                          title="Delete"
                          type="button"
                        >
                          <LuX size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <textarea
                  id="courseContents"
                  name="courseContents"
                  value={newCoursePoint}
                  onChange={(e) => setNewCoursePoint(e.target.value)}
                  onKeyDown={handleAddPoint}
                  className="w-full mt-2 outline-none text-[var(--text-secondary)] placeholder:text-[var(--text-placeholder)] placeholder:italic resize-none"
                  placeholder="Type here and press Enter"
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 space-y-3.5">
            <div>
              <label
                htmlFor="courseThumbnail"
                className="text-base text-[var(--text-secondary)] font-semibold mt-3.5 mb-2"
              >
                Course Thumbnail
                {courseDetails.courseThumbnail && previewImgUrl ? (
                  <div className="w-full h-56 rounded-2xl border border-[var(--border-primary)] overflow-hidden flex justify-center items-center">
                    <img
                      src={previewImgUrl}
                      alt="Thumbnail"
                      className="w-full"
                    />
                  </div>
                ) : (
                  <div className="h-56 rounded-2xl bg-[var(--border-primary)] flex justify-center items-center">
                    <span className="text-[var(--text-secondary)] text-base font-normal">
                      + Upload photo
                    </span>
                  </div>
                )}
                <input
                  id="courseThumbnail"
                  type="file"
                  accept="image/*"
                  name="courseThumbnail"
                  className="hidden"
                  onChange={handleCourseThumbnail}
                />
              </label>
            </div>

            <div className="mt-10">
              <label
                htmlFor="courseMaterial"
                className="mt-3.5 mb-2 cursor-pointer"
              >
                {courseDetails.courseMaterial?.name ? (
                  <div className="w-full h-14 p-3.5 bg-[#E7E7E7] border border-[var(--border-primary)] rounded-2xl outline-none flex justify-between items-center gap-1">
                    <div className="flex justify-start items-center gap-1">
                      <img src="/pdf-icon.svg" alt="pdf" />
                      <span className="text-[var(--text-secondary)] font-semibold">
                        {courseDetails?.courseMaterial?.name}
                      </span>
                    </div>
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        handleClearCourseMaterial();
                      }}
                    >
                      <FaTrashAlt className="text-2xl text-[#B7B7B7]" />
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-14 p-3.5 border border-[var(--border-secondary)] rounded-2xl outline-none flex items-center">
                    <span className="text-[var(--border-secondary)]">
                      Upload whole course materials
                    </span>
                  </div>
                )}

                <input
                  id="courseMaterial"
                  type="file"
                  accept="application/pdf"
                  name="courseMaterial"
                  className="hidden"
                  onChange={handleCourseMaterial}
                />
              </label>
            </div>

            <div className="mt-3">
              <label
                htmlFor="faculties"
                className="text-base text-[var(--text-secondary)] font-semibold mt-3.5 mb-2"
              >
                Faculties
              </label>
              <div className="min-h-32 p-3.5 rounded-2xl border border-[var(--border-primary)] focus-within:border-[var(--border-secondary)]">
                {courseDetails.faculties.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {courseDetails.faculties.map((point, index) => (
                      <div
                        key={index}
                        className="bg-[#D9D9D9] flex justify-between items-center p-1 ps-2 rounded-2xl"
                      >
                        <span className="text-[var(--text-secondary)]">
                          {point}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteFaculty(index);
                          }}
                          className="size-6 bg-[var(--text-secondary)] text-white hover:text-red-700 rounded-full flex justify-center items-center"
                          title="Delete"
                          type="button"
                        >
                          <LuX size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <textarea
                  id="faculties"
                  name="faculties"
                  value={newFaculty}
                  className="w-full mt-2 text-[var(--text-secondary)] outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic resize-none"
                  placeholder="Enter faculty Id no:"
                  onChange={(e) => setNewFaculty(e.target.value)}
                  onKeyDown={handleAddFaculty}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-8 mt-[60px]">
          <button className="w-[330px] h-[54px] bg-[#9D9D9D] text-white font-semibold text-lg rounded-2xl cursor-pointer">
            Cancel
          </button>
          <button
            className="w-[330px] h-[54px] bg-[#72c347] text-white font-semibold text-lg rounded-2xl cursor-pointer"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
