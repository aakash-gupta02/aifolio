import { getAllTools } from "@/lib/getTools";

import FiltersSection from "./_pageSections/FilterSection";
import ToolsGrid from "./_pageSections/ToolsGrid";

export const revalidate = 3600; // ISR: revalidate every hour

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      {/* Page Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-3">
          Explore AI Tools
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our curated collection of AI tools with search, sorting, and filtering.
        </p>
      </div>

      {/* <FiltersSection /> */}

      {/* Tools Grid */}
      <ToolsGrid tools={tools} />
    </main>
  );
}
