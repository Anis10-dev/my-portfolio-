"use client"

import { motion } from "framer-motion"
import { Brain, Code2, Database, LineChart } from "lucide-react"

const stats = [
  {
    icon: Brain,
    value: "50+",
    label: "ML Models Deployed",
  },
  {
    icon: Database,
    value: "100TB+",
    label: "Data Processed",
  },
  {
    icon: LineChart,
    value: "95%",
    label: "Accuracy Rate",
  },
  {
    icon: Code2,
    value: "1000+",
    label: "Commits",
  },
]

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <stat.icon className="w-8 h-8 mb-3 text-primary" />
          </motion.div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}