"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface EducationProps {
  degree: string
  institution: string
  period: string
  description: string
  index: number
}

export function EducationCard({ degree, institution, period, description, index }: EducationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">{degree}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-muted-foreground">{institution}</span>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}