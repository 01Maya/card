"use client"

import { motion } from "framer-motion"

interface CreditCardProps {
  className?: string
}

export function CreditCard({ className = "" }: CreditCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className={`relative aspect-[1.586/1] bg-[#0066FF] rounded-2xl overflow-hidden w-full flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent" />
      <div
        className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center"
        style={{ width: "300px", margin: "auto" }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-12 h-8 bg-yellow-400 rounded" />
          <div className="text-white text-xl font-bold">VISA</div>
        </div>
        <div className="text-white text-2xl tracking-wider font-medium">2671 9860 8300 0202</div>
        <div className="flex justify-between items-center text-white/80 text-sm w-full">
          <span>John Smith</span>
          <span>06/16</span>
        </div>
      </div>
    </motion.div>
  )
}

