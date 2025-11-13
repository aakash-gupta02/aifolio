import { Zap } from 'lucide-react'
import React from 'react'

const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-linear-to-r from-purple-600 to-pink-600 text-white p-2 rounded-xl shadow-lg">
                    <Zap className="w-5 h-5" />
                </div>
            </div>
            <span className="text-lg font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AIFolio
            </span>
        </a>)
}

export default Logo