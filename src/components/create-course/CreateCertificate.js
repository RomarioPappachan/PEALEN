"use client";
import React, { useState } from "react";
import { useAddCourseDetailsStore } from "@/store/addCourseDetailsStore";
import { useAddCourseCertificateStore } from "@/store/addCourseCertificateStore";
import { useAddCourseVideosStore } from "@/store/addCourseVideosStore";

export default function CreateCertificate({ onPrevious }) {
  const { currentCourseId } = useAddCourseDetailsStore();
  const { introVideos, classVideos, conclusionVideos } =
    useAddCourseVideosStore();
  const {
    certificateDetails,
    setCertificateDetail,
    setIsWaterMark,
    addCourseCertificate,
  } = useAddCourseCertificateStore();

  const [previewImgUrl, setPreviewImgUrl] = useState("");

  function handleOnChange(e) {
    const { name, value, type, checked } = e.target;

    // Handle checkboxes correctly
    if (type === "checkbox") {
      setCertificateDetail(name, checked);
    } else {
      setCertificateDetail(name, value);
    }
  }

  function handleIsWatermark(e) {
    const { name, checked } = e.target;
    setIsWaterMark(checked);
  }

  function handleImageChange(e) {
    e.preventDefault();

    const name = e.target.name;
    const file = e.target.files[0];
    console.log(file);

    const imageUrl = URL.createObjectURL(file);

    setCertificateDetail(name, file);
    setPreviewImgUrl(imageUrl);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Collect data
      const videosPayload = {
        courseId: currentCourseId,
        introVideos,
        classVideos,
        conclusionVideos,
      };

      const certificatePayload = {
        courseId: currentCourseId,
        ...certificateDetails,
      };

      // Fire both API calls in parallel (since they’re independent)
      await Promise.all([
        // addCourseVideos(videosPayload), // API call for videos
        addCourseCertificate(currentCourseId, certificatePayload), // API call for certificate
      ]);

      alert("Course details submitted successfully!");

      // Optionally, navigate to the next step here
    } catch (error) {
      console.error("Error submitting course details:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-[var(--text-primary)] text-xl font-semibold">
        Certificate
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex px-5 py-6">
          <div className="w-2/3 ">
            <h3 className="mb-7 text-[var(--text-secondary)] text-base font-semibold">
              Upload Certificate
            </h3>
            <div className="space-y-[26px]" onSubmit={handleSubmit}>
              <div className="flex gap-6">
                <input
                  id="fileName"
                  type="text"
                  name="fileName"
                  value={certificateDetails?.fileName}
                  className="flex-1 h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                  placeholder="File name"
                  onChange={handleOnChange}
                  required
                />
                <label
                  className="p-4 px-4 rounded-2xl bg-[#72c347] text-[var(--background-primary)] cursor-pointer"
                  htmlFor="image"
                >
                  + Upload Image
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <select
                id=""
                name="certificateSize"
                value={certificateDetails?.certificateSize}
                className="w-full h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                onChange={handleOnChange}
                required
              >
                <option value="" selected disabled>
                  -- Select Certificate size --
                </option>
                <option value="A3">A3 (297 x 420mm)</option>
                <option value="A4">A4 (210 x 297mm)</option>
                <option value="A5">A5 (148.5 x 210mm)</option>
                <option value="A6">A4 (105 x 148.5mm)</option>
              </select>

              <div className="flex justify-between items-center">
                <label
                  htmlFor="downloadable"
                  className="flex items-center gap-2 text-[var(--text-secondary)]"
                >
                  <input
                    type="checkbox"
                    name="downloadable"
                    id="downloadable"
                    className="size-4"
                    onChange={handleOnChange}
                    checked={certificateDetails?.downloadable}
                  />
                  Downloadable
                </label>

                <label
                  htmlFor="isWatermark"
                  className="flex items-center gap-2 text-[var(--text-secondary)]"
                >
                  <input
                    type="checkbox"
                    name="isWatermark"
                    id="isWatermark"
                    className="size-4"
                    onChange={handleIsWatermark}
                    checked={certificateDetails?.isWatermark}
                  />
                  Watermark
                </label>

                <input
                  id="watermark"
                  type="text"
                  name="watermark"
                  value={certificateDetails?.watermark}
                  disabled={!certificateDetails?.isWatermark}
                  className="min-w-[268px] h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
                  placeholder="Enter watermark"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>

          <div className="w-1/3 ps-10">
            <div className="w-full h-72 bg-slate-200 border border-[var(--border-primary)] rounded-2xl overflow-hidden relative">
              {previewImgUrl ? (
                <img
                  src={previewImgUrl ? previewImgUrl : null}
                  alt="certificate img"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="absolute top-1/2 left-1/4">
                  No image to display
                </span>
              )}
            </div>
          </div>
        </div>

        {/* buttons  */}
        <div className="flex justify-end gap-8 mt-[60px]">
          <button
            type="button"
            className="w-[330px] h-[54px] bg-[#9D9D9D] text-white font-semibold text-lg rounded-2xl cursor-pointer"
            onClick={onPrevious}
          >
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
