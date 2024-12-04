"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "@/components/cv/experience-card"
import { EducationCard } from "@/components/cv/education-card"
import { SectionHeader } from "@/components/cv/section-header"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const experiences = [
  {
    title: "Senior Machine Learning Engineer",
    company: "TechCorp Analytics",
    period: "2023 - Present",
    description: [
      "Led the development of computer vision models for automated quality control systems",
      "Improved model accuracy by 25% using advanced deep learning techniques",
      "Managed a team of 3 junior data scientists and mentored their professional growth",
      "Implemented MLOps practices reducing model deployment time by 60%"
    ],
    skills: ["PyTorch", "Computer Vision", "MLOps", "Docker", "AWS"]
  },
  {
    title: "Data Analyst & ML Engineer",
    company: "DataDrive Solutions",
    period: "2022 - 2023",
    description: [
      "Developed predictive models for customer churn analysis with 90% accuracy",
      "Created automated data pipelines processing over 1TB of data daily",
      "Conducted A/B tests resulting in 15% improvement in user engagement",
      "Built interactive dashboards using Power BI for executive decision making"
    ],
    skills: ["Python", "SQL", "Scikit-learn", "Power BI", "A/B Testing"]
  }
]

const education = [
  {
    degree: "Master of Science in Data Science",
    institution: "Tech University",
    period: "2020 - 2022",
    description: "Specialized in machine learning and statistical analysis. Thesis on 'Deep Learning Applications in Time Series Forecasting'"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2016 - 2020",
    description: "Focus on algorithms, data structures, and artificial intelligence. Graduated with honors"
  }
]

export default function CV() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Curriculum Vitae
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Experience Section */}
        <section>
          <SectionHeader 
            title="Professional Experience" 
            subtitle="2 years of expertise in machine learning and data analysis"
          />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <SectionHeader title="Education" />
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section>
          <SectionHeader title="Core Competencies" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="space-y-2">
              <h3 className="font-semibold">Machine Learning</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Deep Learning & Neural Networks</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Time Series Analysis</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Data Analysis</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Statistical Analysis</li>
                <li>• Data Visualization</li>
                <li>• A/B Testing</li>
                <li>• ETL Processes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Tools & Technologies</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Python (PyTorch, TensorFlow)</li>
                <li>• SQL & NoSQL Databases</li>
                <li>• Git & Version Control</li>
                <li>• Cloud Platforms (AWS, GCP)</li>
              </ul>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}