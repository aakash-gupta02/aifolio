import React from 'react'

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Mesh Grid - changes for dark mode */}
      <div className="bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px), linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px), linear-gradient(to_bottom,#374151_1px,transparent_1px)] absolute inset-0 bg-size-[24px_24px] opacity-90 dark:opacity-70" />

      {/* Blobs - adjusted for dark mode */}
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-900/20"></div>
      <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20"></div>
    </div>
  )
}

export default Background
