"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-2 mb-8"
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  )
}