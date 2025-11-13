import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Mesh Grid (from your 2nd code) */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),
              linear-gradient(to_bottom,#1E293B_1px,transparent_1px)]
          bg-size-[24px_24px]
          opacity-90
        "
      />

      {/* Blobs (same as 1st code) */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"></div>

    </div>
  );
};

export default Background;
