"use client";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBox({ title = "Search AI Tools..." }: { title?: string }) {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const searchRedirect = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) return;
        router.push(`/tools/${encodeURIComponent(trimmed)}`);
    };

    return (
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg max-w-52 px-4 py-3">

            <form onSubmit={searchRedirect} className="inline-flex items-center gap-2">

                <button
                    type="submit"
                    className=""
                >
                    <Search className="w-4 h-4" />
                </button>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={title}
                    aria-label="Search tools"
                    className=" outline-none border-none focus:ring-0 p-0 m-0 text-sm"
                />

            </form>

        </section>
    );
}
