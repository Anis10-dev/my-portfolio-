"use client"

import { motion } from "framer-motion"
import { AnimatedSkillBar } from "@/components/animated-skill-bar"
import { AnimatedStats } from "@/components/animated-stats"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { skill: "Machine Learning", percentage: 95 },
  { skill: "Deep Learning", percentage: 90 },
  { skill: "Data Analysis", percentage: 92 },
  { skill: "Python", percentage: 95 },
  { skill: "TensorFlow/PyTorch", percentage: 88 },
  { skill: "SQL", percentage: 85 },
]

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming complex data into actionable insights and building intelligent systems that make a difference.
          </p>
        </motion.div>

        {/* Stats Section */}
        <section className="py-8">
          <AnimatedStats />
        </section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="py-8"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                {skills.map((skill, index) => (
                  <AnimatedSkillBar
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                  />
                ))}
              </CardContent>
            </Card>
            <div className="space-y-6">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground">
                  With over 5 years of experience in machine learning and data analysis, 
                  I've developed a deep understanding of how to leverage data to solve 
                  complex business problems. My expertise spans from traditional ML 
                  algorithms to cutting-edge deep learning models.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
                <p className="text-muted-foreground">
                  My research focuses on developing innovative approaches to machine 
                  learning problems, particularly in the areas of computer vision and 
                  natural language processing. I'm passionate about creating AI systems 
                  that are both powerful and interpretable.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}