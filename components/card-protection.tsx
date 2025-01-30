"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CreditCard } from "@/components/credit-card"
import { Button } from "@/components/ui/button"

export function CardProtection() {
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
    <section id="cards" className="py-20 overflow-hidden">
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
          Card Protection
        </motion.h2>

        <div className="relative max-w-[1000px] mx-auto h-[600px]" ref={ref}>
          {/* Dotted circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={controls}
              variants={{
                hidden: { scale: 0, rotate: 0 },
                visible: {
                  scale: 1,
                  rotate: 360,
                  transition: { duration: 1.5, ease: "easeOut" },
                },
              }}
              className="w-full h-full border-2 border-dashed border-blue-200 rounded-full"
            />
          </div>

          {/* Center card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 },
              },
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-10"
          >
            <CreditCard />
          </motion.div>

          {/* Features */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-[800px] h-full max-h-[600px]">
              {[
                {
                  title: "Pin Code",
                  icon: "🔒",
                  description:
                    "Allows to safeguard cash from the card. No one will use it in stores, unless you give a card and keep it in your wallet.",
                  position: "top-[15%] left-[5%]",
                },
                {
                  title: "Payments on the Internet",
                  icon: "🌐",
                  description: "You can disable your card online if you are not going to make online purchases.",
                  position: "bottom-[15%] left-[5%]",
                },
                {
                  title: "Mobile phone",
                  icon: "📱",
                  description:
                    "This key is the security gate if you change your phone number, and update it if you installed bank app and link your SIM card.",
                  position: "top-[15%] right-[5%]",
                },
                {
                  title: "These virtual cards",
                  icon: "💳",
                  description:
                    "Allow you to make payments without the physical card. Also that'll be take a picture or make a copy of your card.",
                  position: "bottom-[15%] right-[5%]",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index < 2 ? -20 : 20 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: index < 2 ? -20 : 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: index * 0.2 },
                    },
                  }}
                  className={`absolute ${feature.position} max-w-[200px] bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl" role="img" aria-label={feature.title}>
                      {feature.icon}
                    </span>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.8 },
            },
          }}
          className="text-center mt-12"
        >
          <Button className="bg-[#1849C6] hover:bg-blue-700 text-white px-8">FILL OUT AN APPLICATION</Button>
        </motion.div>
      </div>
    </section>
  )
}

