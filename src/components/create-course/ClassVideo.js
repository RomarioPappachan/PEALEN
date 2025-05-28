import React from "react";
import { createPortal } from "react-dom";

import { LuX } from "react-icons/lu";

export default function ClassVideo({ videoIndex, setIsAddClassVideoOpen }) {
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center px-2 py-6">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--background-primary)] rounded-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsAddClassVideoOpen(false)}
          className="absolute top-3 right-3 size-9 rounded-lg bg-[#DF5050] text-white flex justify-center items-center z-10 cursor-pointer"
        >
          <LuX className="text-xl" />
        </button>

        <div className="pt-6 px-6 pb-3">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-[var(--text-secondary)]">
            Add Class Video
          </h2>
        </div>
      </div>
    </div>,
    document.body
  );
}
