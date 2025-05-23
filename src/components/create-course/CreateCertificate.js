import React from "react";

export default function CreateCertificate() {
  return (
    <div>
      <h2 className="mb-2 text-[var(--text-primary)] text-xl font-semibold">
        Certificate
      </h2>
      <div className="w-2/3 px-5 py-6">
        <h3 className="mb-7 text-[var(--text-secondary)] text-base font-semibold">
          Upload Certificate
        </h3>
        <form action="" className="space-y-[26px]">
          <div className="flex gap-6">
            <input
              id="certificate"
              type="text"
              name="certificate"
              className="flex-1 h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
              placeholder="File name"
            />
            <button
              type="button"
              className="p-4 px-10 rounded-2xl bg-[#72c347] text-[var(--background-primary)] cursor-pointer"
            >
              + Upload
            </button>
          </div>

          <select
            name=""
            id=""
            className="w-full h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
          >
            <option value="">Certificate size 512 x 1024</option>
          </select>

          <div className="flex justify-between items-center">
            <label
              htmlFor=""
              className="flex items-center gap-2 text-[var(--text-secondary)]"
            >
              <input type="checkbox" name="" id="" className="size-4" />
              Downloadable
            </label>

            <label
              htmlFor=""
              className="flex items-center gap-2 text-[var(--text-secondary)]"
            >
              <input type="checkbox" name="" id="" className="size-4" />
              Watermark
            </label>

            <input
              id="watermark"
              type="text"
              name="watermark"
              className="min-w-[268px] h-14 p-3.5 bg-[var(--background-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] rounded-2xl outline-none placeholder:text-[var(--text-placeholder)] placeholder:italic focus:border-[var(--border-secondary)]"
              placeholder="Enter watermark"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
