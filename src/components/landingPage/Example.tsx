// This will work now!
export default function Component() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg p-6">
      <h1 className="text-2xl font-bold">Your Content</h1>
      <p className="text-gray-600 dark:text-gray-300">This text changes in dark mode</p>
      
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 mt-4">
        Card content that works in both modes
      </div>
    </div>
  );
}