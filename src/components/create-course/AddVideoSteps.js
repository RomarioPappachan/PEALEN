// import React, { useState } from "react";
// import { createPortal } from "react-dom";

// import { LuX } from "react-icons/lu";

// export default function AddVideoSteps({ id, videoIndex, setAddStepOpen }) {
//   const [videoSteps, setVideoSteps] = useState([]);
//   const [newVideoStep, setNewVideoStep] = useState("");

//   const handleAddStep = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault(); // Prevents newline
//       const trimmed = newVideoStep.trim();
//       if (trimmed !== "") {
//         const updatedVideoSteps = videoSteps;
//         updatedVideoSteps.push(trimmed);

//         setVideoSteps(updatedVideoSteps);
//         setNewVideoStep(""); // Clear textarea
//       }
//     }
//   };

//   const handleDeleteStep = (indexToDelete) => {

//     setVideoSteps((prevValue) => (
//       prevValue.filter(
//         (_, idx) => idx !== indexToDelete
//       ),
//     ));
//   };

//   return createPortal(
//     <div className="w-screen min-h-screen px-2 py-10 bg-black/20 fixed left-0 top-0 flex justify-center items-center z-30">
//       <div className="w-[1150px] min-h-[550px] max-w-6xl bg-[var(--background-primary)] rounded-2xl pt-5 py-9 px-16 relative">
//         <button type="button" className="absolute top-5 right-5 size-9 rounded-lg flex justify-center items-center bg-[#DF5050] text-white cursor-pointer"
//         onClick={() => setAddStepOpen(false)}
//         >
//           <LuX className="text-xl" />
//         </button>
//         <div className="">
//           <h2 className="text-center text-2xl font-semibold text-[var(--text-secondary)] ">
//             Add Video Steps
//           </h2>
//         </div>

//         <div className="mt-5 overflow-hidden">
//           <label
//             htmlFor={`videoSteps-${id}`}
//             className="text-base text-[var(--text-secondary)] font-semibold mt-3.5 mb-2"
//           >
//            Video Steps
//           </label>
//           <div className="w-full min-h-32 p-3.5 rounded-2xl border border-[var(--border-primary)] focus-within:border-[var(--border-secondary)]">
//             {videoSteps.length > 0 && (
//               <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
//                 {videoSteps.map((step, index) => (
//                   <li key={index} className="relative pr-6">
//                     <span>{step}</span>
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault();
//                         handleDeleteStep(index);
//                       }}
//                       className="absolute right-0 top-0 text-red-500 hover:text-red-700"
//                       title="Delete"
//                       type="button"
//                     >
//                       <LuX size={16} />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <textarea
//               id={`videoSteps-${id}`}
//               name="videoSteps"
//               value={newVideoStep}
//               onChange={(e) => setNewVideoStep(e.target.value)}
//               onKeyDown={handleAddStep}
//               className="w-full mt-2 outline-none text-[var(--text-secondary)] placeholder:text-[var(--text-placeholder)] placeholder:italic resize-none"
//               placeholder="Type here and press Enter"
//               rows={6}
//             />
//           </div>
//         </div>

//         <div>
//             <button type="button">Add Steps</button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useAddCourseVideosStore } from "@/store/addCourseVideosStore";

import { LuX } from "react-icons/lu";

export default function AddVideoSteps({ id, videoIndex, setAddStepOpen }) {
  const { classVideos, addClassVideoSteps, removeClassVideoSteps } =
    useAddCourseVideosStore();

  const [newVideoStep, setNewVideoStep] = useState("");

  const handleAddStep = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const trimmed = newVideoStep.trim();
      if (trimmed !== "") {
        addClassVideoSteps(trimmed, videoIndex);
        setNewVideoStep("");
      }
    }
  };

  const handleDeleteStep = (indexToDelete) => {
    removeClassVideoSteps(videoIndex, indexToDelete);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-2 py-6">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--background-primary)] rounded-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setAddStepOpen(false)}
          className="absolute top-3 right-3 size-9 rounded-lg bg-[#DF5050] text-white flex justify-center items-center z-10 cursor-pointer"
        >
          <LuX className="text-xl" />
        </button>

        {/* Header */}
        <div className="pt-6 px-6 pb-3">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-[var(--text-secondary)]">
            Add Video Steps
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto mx-14 pb-24 flex-1">
          <label
            htmlFor={`videoSteps-${id}`}
            className="block text-base text-[var(--text-secondary)] font-semibold mb-2"
          >
            Video Steps
          </label>
          <div className="w-full min-h-32 p-3.5 rounded-2xl border border-[var(--border-primary)] focus-within:border-[var(--border-secondary)]">
            {classVideos[videoIndex]?.videoSteps.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                {classVideos[videoIndex]?.videoSteps.map((step, index) => (
                  <li key={index} className="relative pr-6">
                    <span>{step}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteStep(index);
                      }}
                      className="absolute right-0 top-0 size-6 bg-[var(--text-secondary)] text-white hover:bg-red-400 rounded-full flex justify-center items-center cursor-pointer"
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
              id={`videoSteps-${id}`}
              name="videoSteps"
              value={newVideoStep}
              onChange={(e) => setNewVideoStep(e.target.value)}
              onKeyDown={handleAddStep}
              className="w-full mt-2 outline-none text-[var(--text-secondary)] placeholder:text-[var(--text-placeholder)] placeholder:italic resize-none"
              placeholder="Type here and press Enter"
              rows={6}
            />
          </div>
        </div>

        {/* Sticky Footer Button */}
        <div className="absolute bottom-0 left-0 w-full bg-[var(--background-primary)] px-14 py-4 flex items-center justify-end">
          <button
            type="button"
            className="px-6 py-3 bg-[#72C347] hover:bg-[#72c347e2] text-white text-xl rounded-2xl font-semibold"
          >
            Add Steps
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
