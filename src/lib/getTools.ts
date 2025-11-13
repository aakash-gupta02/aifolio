import toolsData from "@/data/tools.json";
import { Tool } from "@/types/tool";

export function getAllTools(): Tool[] {
  return toolsData as Tool[];
}

export function getToolById(slug: string): Tool | undefined {
  return (toolsData as Tool[]).find(t => t.slug === slug);
}
