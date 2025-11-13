import { getAllTools } from "@/lib/getTools";

import FiltersSection from "./_pageSections/FilterSection";
import ToolsGrid from "./_pageSections/ToolsGrid";
import { TrendingUp } from "lucide-react";

export const revalidate = 3600; // ISR: revalidate every hour

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            {tools.length}+ AI Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing AI Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find the perfect AI solution for your workflow. Search, filter, and compare tools to boost your productivity.
          </p>
        </div>

      {/* Tools Grid */}
      <ToolsGrid tools={tools} />
    </main>
  );
}
