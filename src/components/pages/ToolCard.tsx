import { Tool } from "@/types/tool";
import Image from "next/image";
import Link from "next/link";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="relative group border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md dark:hover:shadow-purple-500/10 transition overflow-hidden"
    >
      {/* hover color layer */}
      <span className="pointer-events-none absolute inset-0 bg-linear-to-b from-purple-400/30 dark:from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

      {/* content above the overlay */}
      <div className="relative z-10">
        <Image
          src={tool.image_url}
          alt={tool.name}
          width={64}
          height={64}
          className="rounded-lg mb-4"
        />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
          {tool.description}
        </p>

        <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
          Rank #{tool.rank} • {tool.pricing}
        </div>
      </div>
    </Link>
  );
}
