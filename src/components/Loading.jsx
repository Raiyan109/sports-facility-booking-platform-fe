import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {" "}
      <div
        class="w-12 h-12 rounded-full animate-spin
    border-8 border-solid border-purple-500 border-t-transparent"
      ></div>
    </div>
  );
};
