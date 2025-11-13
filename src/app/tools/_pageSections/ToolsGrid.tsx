"use client";

import { useState, useEffect } from "react";
import ToolCard from "@/components/pages/ToolCard";
import { Tool } from "@/types/tool";

interface Props {
  tools: Tool[];
}

export default function ToolsGrid({ tools }: Props) {
  const [filtered, setFiltered] = useState<Tool[]>(tools);
  const [search, setSearch] = useState("");
  const [pricing, setPricing] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    let result = [...tools];

    // Search
    if (search.trim()) {
      result = result.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase())
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
  }, [search, pricing, sort, tools]);

  return (
    <>
      {/* Filters UI */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search tools..."
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white"
          onChange={(e) => setPricing(e.target.value)}
        >
          <option value="">All Pricing</option>
          <option value="free">Free</option>
          <option value="freemium">Freemium</option>
          <option value="paid">Paid</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="rank-asc">Rank (Low → High)</option>
          <option value="rank-desc">Rank (High → Low)</option>
          <option value="name-asc">Name (A → Z)</option>
          <option value="name-desc">Name (Z → A)</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </>
  );
}
