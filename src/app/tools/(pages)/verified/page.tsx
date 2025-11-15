import { getAllTools } from '@/lib/getTools'
import ToolsGrid from '../../_pageSections/ToolsGrid'
import SectionHeading from '@/components/landingPage/SectionHeading'
import { Verified } from 'lucide-react'

export const metadata = {
  title: 'Verified AI Tools – AIFolio',
  description: 'AI tools that are verified for quality and reliability.',
}

export default function VerifiedToolsPage() {
  const allTools = getAllTools()
  const verifiedTools = allTools.filter((tool) => tool.verified === true)
  return (
    <SectionHeading
      title={
        <>
          Explore <span className="textGradient">Verified</span> AI Tools
        </>
      }
      subtitle="Explore a curated list of AI tools that are verified for quality and reliability."
      icon={<Verified className="h-4 w-4" />}
      iconTitle={`${verifiedTools.length}+ Verified AI Tools Available`}
    >
      <ToolsGrid tools={verifiedTools} />
    </SectionHeading>
  )
}
