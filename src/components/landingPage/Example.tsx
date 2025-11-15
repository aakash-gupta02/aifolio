// This will work now!
export default function Component() {
  return (
    <div className="rounded-lg bg-white p-6 text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">Your Content</h1>
      <p className="text-gray-600 dark:text-gray-300">This text changes in dark mode</p>

      <div className="mt-4 rounded border border-gray-200 p-4 dark:border-gray-700">
        Card content that works in both modes
      </div>
    </div>
  )
}
