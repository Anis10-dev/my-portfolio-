"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
  index: number
}

export function ExperienceCard({ title, company, period, description, skills, index }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-muted-foreground">{company}</span>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <ul className="mt-4 space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}