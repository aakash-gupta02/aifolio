"use client";
import { useState, useEffect } from "react";
import ToolCard from "@/components/pages/ToolCard";
import { Tool } from "@/types/tool";
import {
  Search,
  Filter,
  SortAsc,
  X,
  TrendingUp,
  ArrowUpDown,
  AArrowUp,
  AArrowDown,
  BadgePercent
} from "lucide-react";
import Background from "@/components/landingPage/Background";

interface Props {
  tools: Tool[];
}

export default function ToolsGrid({ tools }: Props) {
  const [filtered, setFiltered] = useState<Tool[]>(tools);
  const [search, setSearch] = useState("");
  const [pricing, setPricing] = useState("");
  const [sort, setSort] = useState("");
  const [activeFilters, setActiveFilters] = useState(0);

  useEffect(() => {
    let result = [...tools];

    // Search
    if (search.trim()) {
      result = result.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Pricing filter
    if (pricing) {
      result = result.filter((tool) => tool.pricing === pricing);
    }

    // Sorting
    if (sort === "rank-asc") result.sort((a, b) => a.rank - b.rank);
    if (sort === "rank-desc") result.sort((a, b) => b.rank - a.rank);
    if (sort === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") result.sort((a, b) => b.name.localeCompare(a.name));

    setFiltered(result);

    // Calculate active filters
    let count = 0;
    if (search.trim()) count++;
    if (pricing) count++;
    if (sort) count++;
    setActiveFilters(count);
  }, [search, pricing, sort, tools]);

  const clearFilters = () => {
    setSearch("");
    setPricing("");
    setSort("");
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "free": return "text-green-600 bg-green-50 border-green-200";
      case "freemium": return "text-blue-600 bg-blue-50 border-blue-200";
      case "paid": return "text-purple-600 bg-purple-50 border-purple-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <main className="min-h-screen">

      <Background />
      {/* Enhanced Filters Section */}
      <div className="mb-8 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search tools by name or description..."
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md dark:text-white dark:placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-col gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Pricing Filter */}
            <div className="relative flex-1 sm:flex-initial">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <select
                className="w-full sm:w-48 pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none shadow-sm hover:shadow-md dark:text-white"
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
              >
                <option value="">All Pricing</option>
                <option value="free">Free</option>
                <option value="freemium">Freemium</option>
                <option value="paid">Paid</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="relative flex-1 sm:flex-initial">
              <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
              <select
                className="w-full sm:w-48 pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none shadow-sm hover:shadow-md dark:text-white"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="rank-asc">
                  Rank (Low → High)
                </option>
                <option value="rank-desc">
                  Rank (High → Low)
                </option>
                <option value="name-asc">
                  Name (A → Z)
                </option>
                <option value="name-desc">
                  Name (Z → A)
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span className="font-medium">{filtered.length}</span>
          <span>tools found</span>
          {activeFilters > 0 && (
            <span className="text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full">
              {activeFilters} filter{activeFilters > 1 ? 's' : ''} active
            </span>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <Search className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No tools found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button
            onClick={clearFilters}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

    </main>
  );
}