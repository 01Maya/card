"use client"

import { motion } from "framer-motion"
import { CreditCard } from "@/components/credit-card"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("cards")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen bg-[#1849C6] pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {"Card \"Next\""}
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-md mx-auto md:mx-0">
              Your personal card for daily purposes. This card was created to help you make wisely purchases and get
              benefits with joy. Discover all advantages and get your card today!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <CreditCard className="w-96 rotate-6 shadow-xl hover:rotate-0 transition-transform duration-500" />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
      >
        <button
          onClick={scrollToNext}
          className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
        >
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

