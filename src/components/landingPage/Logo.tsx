import { Zap } from 'lucide-react'
import React from 'react'

const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
                <div className="absolute inset-0 bgGradient rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bgGradient text-white p-2 rounded-xl shadow-lg">
                    <Zap className="w-5 h-5" />
                </div>
            </div>
            <span className="text-lg font-bold textGradient ">
                AIFolio
            </span>
        </a>)
}

export default Logo