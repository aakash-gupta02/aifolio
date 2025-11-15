import { getAllTools } from '@/lib/getTools'
import ToolsGrid from '../../_pageSections/ToolsGrid'
import SectionHeading from '@/components/landingPage/SectionHeading'
import { DollarSign } from 'lucide-react'

export const metadata = {
  title: 'Free AI Tools – AIFolio',
  description: 'AI tools that are free to use.',
}

export default function FreeToolsPage() {
  const allTools = getAllTools()
  const freeTools = allTools.filter((tool) => tool.pricing === 'free')

  return (
    <SectionHeading
      title={
        <>
          Explore <span className="textGradient">Free</span> AI Tools
        </>
      }
      subtitle="Explore a curated list of AI tools that are completely free to use."
      icon={<DollarSign className="h-4 w-4" />}
      iconTitle={`${freeTools.length}+ Free AI Tools Available`}
    >
      <ToolsGrid tools={freeTools} />
    </SectionHeading>
  )
}
