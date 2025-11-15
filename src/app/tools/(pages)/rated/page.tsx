import { getAllTools } from '@/lib/getTools'
import ToolsGrid from '../../_pageSections/ToolsGrid'
import SectionHeading from '@/components/landingPage/SectionHeading'
import { Star } from 'lucide-react'

export const metadata = {
  title: 'Top Rated AI Tools – AIFolio',
  description: 'AI tools that are highly rated by users.',
}

export default function RatedToolsPage() {
  const allTools = getAllTools()
  const ratedTools = allTools.filter((tool) => tool.rank <= 10)
  return (
    <SectionHeading
      title={
        <>
          Explore Top 10 <span className="textGradient">Rated</span> AI Tools
        </>
      }
      subtitle="Explore a curated list of AI tools that are highly rated by users."
      icon={<Star className="h-4 w-4" />}
      iconTitle={`${ratedTools.length}+ Rated AI Tools Available`}
    >
      <ToolsGrid tools={ratedTools} />
    </SectionHeading>
  )
}
