import { Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative">
        <div className="bgGradient absolute inset-0 rounded-xl opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="bgGradient relative rounded-xl p-2 text-white shadow-lg">
          <Zap className="h-5 w-5" />
        </div>
      </div>
      <span className="textGradient text-lg font-bold">AIFolio</span>
    </Link>
  )
}

export default Logo
