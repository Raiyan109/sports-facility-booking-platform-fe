import React from "react";

export const Search = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch] ">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 items-end">
          <div>
            <label htmlFor="form" className="block mb-2 font-medium">
              From
            </label>
            <select
              name=""
              id=""
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:bg-neutral-900"
            >
              <option value=""> Select Location</option>
              <option value=""> Select Location</option>
              <option value=""> Select Location</option>
              <option value=""> Select Location</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
