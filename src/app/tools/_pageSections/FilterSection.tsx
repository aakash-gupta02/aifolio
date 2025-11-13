"use client";
import { useState } from "react";

export default function FiltersSection() {
  const [search, setSearch] = useState("");
  const [pricing, setPricing] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="mb-10 grid gap-4 md:grid-cols-3">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Pricing Filter */}
      <select
        value={pricing}
        onChange={(e) => setPricing(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white"
      >
        <option value="">All Pricing</option>
        <option value="free">Free</option>
        <option value="freemium">Freemium</option>
        <option value="paid">Paid</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white"
      >
        <option value="">Sort</option>
        <option value="rank-asc">Rank (Low → High)</option>
        <option value="rank-desc">Rank (High → Low)</option>
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
      </select>
    </div>
  );
}
