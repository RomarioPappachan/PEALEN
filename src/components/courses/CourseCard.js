import React from "react";
import { LuClock, LuFileBadge2 } from "react-icons/lu";

export default function CourseCard({ course }) {
  return (
    <div className="w-60 bg-[var(--background-primary)] rounded-[10px] p-2 pb-5 drop-shadow-md cursor-pointer">
      <div className="h-28 bg-purple-300 rounded-xl">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base text-[var(--text-primary)] font-bold">
          Course Name
        </h3>
        <p className="text-[10px] font-semibold text-[#72C347] flex justify-start items-center gap-1">
          <LuClock className="text-lg" />
          <span>Course duration 38 hours</span>
        </p>
        <p className="text-[10px] font-semibold text-[var(--text-secondary)] flex justify-start items-center gap-1">
          <LuFileBadge2 className="text-lg" />
          <span>Certified professional in course name</span>
        </p>
      </div>
    </div>
  );
}
