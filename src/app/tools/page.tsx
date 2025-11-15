import { getAllTools } from '@/lib/getTools'

import ToolsGrid from './_pageSections/ToolsGrid'
import { TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/landingPage/SectionHeading'

export const revalidate = 3600 // ISR: revalidate every hour

export const metadata = {
  title: 'All AI Tools – AIFolio',
  description: 'Search, filter, and explore AI tools.',
}

export default function ToolsPage() {
  const tools = getAllTools()

  return (
    <SectionHeading
      title={
        <>
          Discover Amazing <span className="textGradient">AI</span> Tools
        </>
      }
      subtitle="Find the perfect AI solution for your workflow. Search, filter, and compare tools to boost your productivity."
      icon={<TrendingUp className="h-4 w-4" />}
      iconTitle="100+ AI Tools Available"
    >
      {/* Tools Grid */}
      <ToolsGrid tools={tools} />
    </SectionHeading>
  )
}
