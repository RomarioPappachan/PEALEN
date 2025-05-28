// import React from "react";

// import { createPortal } from "react-dom";
// import { LuPlus, LuX } from "react-icons/lu";

// export default function AddQuestionsAndChallenge({
//   id,
//   videoIndex,
//   setAddQuestionsOpen,
// }) {
//   return createPortal(
//     <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-2 py-6">
//       <div className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--background-primary)] rounded-2xl overflow-y-scroll scrollbar-visible flex flex-col">
//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={() => setAddQuestionsOpen(false)}
//           className="absolute top-3 right-3 size-9 rounded-lg bg-[#DF5050] text-white flex justify-center items-center z-10 cursor-pointer"
//         >
//           <LuX className="text-xl" />
//         </button>

//         {/* Header */}
//         <div className="pt-6 px-6 pb-3">
//           <h2 className="text-center text-xl md:text-2xl font-semibold text-[var(--text-secondary)]">
//             Add Questions
//           </h2>
//         </div>

//         {/* Scrollable Content */}
//         <div className="relative overflow-y-scroll scrollbar-visible mx-14 pe- pb-24 flex-1 flex flex-col">
//           <div className="flex-1 flex flex-col gap-y-7">
//             {/* Question  */}
//             <div className="flex justify-start items-center gap-x-[26px]">
//               <span className="text-3xl text-[var(--foreground-primary)] font-normal">
//                 1
//               </span>
//               <div className="flex-1 p-0.5 h-[52px] border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
//                 <input
//                   type="text"
//                   name="question"
//                   // value={courseDetails.courseTitle}
//                   className="flex-1 w-full h-full px-4 py-3 text-xl text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)"
//                   placeholder="Type Question"
//                   // onChange={handleOnChange}
//                 />
//                 <label className="w-20 h-full px-3 py-1 text-sm text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
//                   Upload Image
//                 </label>
//               </div>
//             </div>

//             {/* Options  */}
//             <div className="grid grid-cols-2 gap-7">
//               <div className="flex justify-start items-center gap-x-[26px]">
//                 <span className="text-2xl text-[var(--foreground-primary)] font-normal">
//                   A
//                 </span>
//                 <div className="flex-1 flex items-center gap-x-4">
//                   <div className="flex-1 p-0.5 h-[52px] border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
//                     <input
//                       type="text"
//                       name="question"
//                       // value={courseDetails.courseTitle}
//                       className="flex-1 w-full h-full px-4 py-3 text-xl text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)"
//                       placeholder="Type Question"
//                       // onChange={handleOnChange}
//                     />
//                     <label className="w-20 h-full px-3 py-1 text-sm text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
//                       Upload Image
//                     </label>
//                   </div>
//                   <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     className="size-4 text-[var(--foreground-primary)] accent-[#72C347]"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-start items-center gap-x-[26px]">
//                 <span className="text-2xl text-[var(--foreground-primary)] font-normal">
//                   B
//                 </span>
//                 <div className="flex-1 flex items-center gap-x-4">
//                   <div className="flex-1 p-0.5 h-[52px] border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
//                     <input
//                       type="text"
//                       name="question"
//                       // value={courseDetails.courseTitle}
//                       className="flex-1 w-full h-full px-4 py-3 text-xl text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)"
//                       placeholder="Type Question"
//                       // onChange={handleOnChange}
//                     />
//                     <label className="w-20 h-full px-3 py-1 text-sm text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
//                       Upload Image
//                     </label>
//                   </div>
//                   <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     className="size-4 text-[var(--foreground-primary)] accent-[#72C347]"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-start items-center gap-x-[26px]">
//                 <span className="text-2xl text-[var(--foreground-primary)] font-normal">
//                   C
//                 </span>
//                 <div className="flex-1 flex items-center gap-x-4">
//                   <div className="flex-1 p-0.5 h-[52px] border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
//                     <input
//                       type="text"
//                       name="question"
//                       // value={courseDetails.courseTitle}
//                       className="flex-1 w-full h-full px-4 py-3 text-xl text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)"
//                       placeholder="Type Question"
//                       // onChange={handleOnChange}
//                     />
//                     <label className="w-20 h-full px-3 py-1 text-sm text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
//                       Upload Image
//                     </label>
//                   </div>
//                   <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     className="size-4 text-[var(--foreground-primary)] accent-[#72C347]"
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-start items-center gap-x-[26px]">
//                 <span className="text-2xl text-[var(--foreground-primary)] font-normal">
//                   D
//                 </span>
//                 <div className="flex-1 flex items-center gap-x-4">
//                   <div className="flex-1 p-0.5 h-[52px] border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
//                     <input
//                       type="text"
//                       name="question"
//                       // value={courseDetails.courseTitle}
//                       className="flex-1 w-full h-full px-4 py-3 text-xl text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)"
//                       placeholder="Type Question"
//                       // onChange={handleOnChange}
//                     />
//                     <label className="w-20 h-full px-3 py-1 text-sm text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
//                       Upload Image
//                     </label>
//                   </div>
//                   <input
//                     type="checkbox"
//                     name=""
//                     id=""
//                     className="size-4 text-[var(--foreground-primary)] accent-[#72C347]"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 title="Add option"
//                 className="ms-11 size-12 border border-[var(--border-secondary)] rounded-lg flex justify-center items-center cursor-pointer"
//               >
//                 <LuPlus className="text-3xl text-[#72C347]" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Add new question  */}
//         <div className="flex justify-center">
//           <button
//             type="button"
//             title="Add question"
//             className="font-semibold text-lg text-[var(--text-secondary)] border-b border-[var(--text-secondary)] cursor-pointer"
//             // onClick={addNewClassVideo}
//           >
//             + Add a question
//           </button>
//         </div>

//         {/* Add Challenge  */}
//         <div className="mt-6 bottom-0 left-0 w-full h-64 px-14">
//           <h2 className="text-center text-xl md:text-2xl font-semibold text-[var(--text-secondary)]">
//             Add Challenge
//           </h2>
//           <div className="w-full p-0.5 border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
//             <textarea
//               name="challenge"
//               className="flex-1 w-full px-4 py-3 text-xl text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)"
//               placeholder="Type here"
//               rows={6}
//             />
//             <label className="w-20 h-full px-3 py-1 text-sm text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
//               Upload Image
//             </label>
//           </div>
//         </div>

//         {/* Sticky Footer Button */}
//         <div className="absolute bottom-0 left-0 w-full bg-[var(--background-primary)] px-14 py-4 flex items-center justify-end">
//           <button
//             type="button"
//             className="px-6 py-3 bg-[#72C347] hover:bg-[#72c347e2] text-white text-xl rounded-2xl font-semibold"
//           >
//             Finish
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }

import React from "react";
import { createPortal } from "react-dom";
import { useAddCourseVideosStore } from "@/store/addCourseVideosStore";

import { LuPlus, LuX } from "react-icons/lu";

export default function AddQuestionsAndChallenge({
  id,
  videoIndex,
  setAddQuestionsOpen,
}) {
  const {
    classVideos,
    addClassVideoQuestions,
    addClassQuestionOptions,
    removeClassVideoQuestions,
    removeClassQuestionOptions,
  } = useAddCourseVideosStore();

  const videoTest = classVideos[videoIndex]?.test;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-2 py-6">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--background-primary)] rounded-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setAddQuestionsOpen(false)}
          className="absolute top-3 right-3 size-9 rounded-lg bg-[#DF5050] text-white flex justify-center items-center z-10 cursor-pointer"
        >
          <LuX className="text-xl" />
        </button>

        {/* Header */}
        <div className="pt-6 px-6 pb-3">
          <h2 className="text-center text-base md:text-lg font-semibold text-[var(--text-secondary)]">
            Add Questions
          </h2>
        </div>

        {/* Scrollable Question & Options Section */}
        <div className="relative flex-1 overflow-y-auto scrollbar-visible mx-14 pe-2 pb-6 space-y-8 snap-y">
          {videoTest?.questions?.map((question, questionIndex) => (
            <div
              key={question?.id}
              className="flex flex-col gap-y-4 snap-start"
            >
              {/* Question */}
              <div className="flex justify-start items-center gap-x-[26px]  ">
                <span className="text-xl text-[var(--foreground-primary)] font-normal">
                  {questionIndex + 1}
                </span>
                <div className="flex-1 p-0.5 h-10 border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
                  <input
                    type="text"
                    name="question"
                    // value={question?.question}
                    className="flex-1 w-full h-full px-4 py-3 text-sm text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)]"
                    placeholder="Type Question"
                  />
                  <label className="w-20 h-full px-3 py-1 text-[10px] text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
                    Upload Image
                  </label>
                </div>
                <button
                  onClick={() =>
                    removeClassVideoQuestions(videoIndex, questionIndex)
                  }
                  className="size-6 bg-[var(--border-secondary)] text-white hover:bg-red-400 rounded-full flex justify-center items-center cursor-pointer"
                  type="button"
                >
                  <LuX size={16} />
                </button>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-4">
                {question?.options.map((option, idx) => (
                  <div
                    key={option.id}
                    className="flex justify-start items-center gap-x-[26px]"
                  >
                    <span className="text-base text-[var(--foreground-primary)] font-normal">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="flex-1 flex items-center gap-x-4">
                      <input
                        id={`correctAnswer-${questionIndex}`}
                        type="checkbox"
                        className="size-4 text-[var(--foreground-primary)] accent-[#72C347]"
                        name={`correctAnswer-${questionIndex}`}
                      />
                      <div className="flex-1 p-0.5 h-10 border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-center">
                        <input
                          type="text"
                          name={`option-${idx}`}
                          value={option.textOption}
                          className="flex-1 w-full h-full px-4 py-3 text-sm text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)]"
                          placeholder="Type Question"
                        />
                        <label className="w-20 h-full px-3 py-1 text-[10px] text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
                          Upload Image
                        </label>
                      </div>

                      <button
                        onClick={() =>
                          removeClassQuestionOptions(
                            videoIndex,
                            questionIndex,
                            idx
                          )
                        }
                        className="size-6 bg-[var(--text-secondary)] text-white hover:bg-red-400 rounded-full flex justify-center items-center cursor-pointer"
                        type="button"
                      >
                        <LuX size={16} />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  title="Add option"
                  className="ms-10 size-9 border border-[var(--border-secondary)] rounded-lg flex justify-center items-center cursor-pointer"
                  onClick={() =>
                    addClassQuestionOptions(videoIndex, questionIndex)
                  }
                >
                  <LuPlus className="text-xl text-[#72C347]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Bottom Section */}
        <div className="w-full bg-[var(--background-primary)] px-14 pb-4 flex flex-col gap-6">
          {/* Add New Question */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              title="Add question"
              className="font-semibold text-sm text-[#72C347] border-b border-[var(--border-secondary)] cursor-pointer"
              onClick={() => addClassVideoQuestions(videoIndex)}
            >
              + Add a question
            </button>
          </div>

          {/* Add Challenge */}
          <div>
            <h2 className="mb-2 text-center text-base md:text-lg font-semibold text-[var(--text-secondary)]">
              Add Challenge
            </h2>
            <div className="w-full p-0.5 border border-[var(--border-primary)] rounded-[10px] focus-within:border-[var(--border-secondary)] flex items-start">
              <textarea
                name="challenge"
                className="flex-1 w-full px-4 py-3 text-sm text-[var(--text-secondary)] rounded-[10px] outline-none placeholder:text-[var(--text-placeholder)]"
                placeholder="Type here"
                rows={4}
              />
              <label className="w-20 h-full px-3 py-1 text-[10px] text-[#72C347] bg-[#E5E5E5] rounded-[10px] text-center cursor-pointer">
                Upload Image
              </label>
            </div>
          </div>

          {/* Finish Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="px-6 py-3 bg-[#72C347] hover:bg-[#72c347e2] text-white text-sm rounded-2xl font-semibold"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
