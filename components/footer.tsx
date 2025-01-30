"use client"

import { motion } from "framer-motion"

export function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-white border-t">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <FooterColumn title="About" items={["Company Info", "Careers", "Leadership"]} />
          <FooterColumn title="Cards" items={["Credit Cards", "Debit Cards", "Prepaid Cards"]} />
          <FooterColumn title="Resources" items={["Help Center", "Card Support", "Security"]} />
          <FooterColumn title="Mortgages" items={["Mortgage Rates", "Refinance Rates", "Home Equity"]} />
          <FooterColumn title="Planning & Investments" items={["Retirement", "Investments", "Wealth Management"]} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t text-sm text-gray-600 flex flex-wrap justify-between items-center"
        >
          <p>&copy; 2024 All rights reserved</p>
          <div className="flex space-x-4">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="hover:text-blue-600 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  items: string[]
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
    >
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item) => (
          <li key={item} className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

