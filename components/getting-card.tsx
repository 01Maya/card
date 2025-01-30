"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, CheckCircle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GettingCard() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="service" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-3xl font-bold text-center mb-16"
        >
          Getting The Card
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <Step
            icon={<FileText className="h-8 w-8" />}
            title="Online Application"
            description="Fill in the form online you can apply in 5 minutes and it will take 2-3 minutes of your time."
          />
          <Step
            icon={<CheckCircle className="h-8 w-8" />}
            title="Get an approval"
            description="Bank will inform you immediately if you have any questions, you can get help from a competent call center."
          />
          <Step
            icon={<CreditCard className="h-8 w-8" />}
            title="Card Delivery"
            description="Bank employee delivers your card and documents to your home at work at a different time."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 },
            },
          }}
          className="text-center mt-12"
        >
          <Button className="bg-[#1849C6] hover:bg-blue-700 text-white transition-colors duration-200" size="lg">
            FILL OUT AN APPLICATION
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

interface StepProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Step({ icon, title, description }: StepProps) {
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
      className="text-center space-y-4 group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white"
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-200">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}

