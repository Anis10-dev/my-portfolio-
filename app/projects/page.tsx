"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/projects/project-card"

const projects = [
    {
  "title": "Sales Analysis",
  "description": "Designed and implemented a cutting-edge sales dashboard to analyze and visualize customer segmentation trends, providing actionable insights and improving decision-making.",
  "image": "https://utfs.io/f/xBBNn2ZfRjQTRhErGExcrS2BgIiV0hylWPYoDv7ubktE65fd",
  "demoUrl": "https://demo-url.com",
  "githubUrl": "https://github.com/Anis10-dev",
  "technologies": ["Python", "Pandas", "Power BI"]
},
  {
    title: "Predictive Analytics Dashboard",
    description: "Built an interactive dashboard for sales forecasting using machine learning models, reducing forecast error by 35% compared to traditional methods.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/Anis10-dev",
    technologies: ["Python", "Scikit-learn", "Streamlit", "PostgreSQL", "Plotly"]
  },
  {
    "title": "HR Absenteeism Dashboard",
    "description": "Developed an interactive HR absenteeism dashboard that leverages advanced analytics to identify patterns, predict trends, and assist HR professionals in optimizing workforce management.",
    "image": "https://utfs.io/f/xBBNn2ZfRjQThEVIy8JIyZib7CJoQd0l5pWSXRDwArMGmKkh",
    "demoUrl": "https://demo-url.com",
    "githubUrl": "https://github.com/Anis10-dev",
    "technologies": ["BERT", "TensorFlow", "Python", "FastAPI", "MongoDB"]
  },
  {
    title: "Time Series Forecasting System",
    description: "Implemented an advanced time series forecasting system for stock market prediction using ensemble methods and deep learning.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/Anis10-dev",
    technologies: ["LSTM", "Prophet", "Python", "Redis", "Docker"]
  },
  {
    title: "Recommendation Engine",
    description: "Developed a hybrid recommendation system combining collaborative and content-based filtering for e-commerce product suggestions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/Anis10-dev",
    technologies: ["Python", "Apache Spark", "AWS", "Neo4j", "Flask"]
  },
  {
    title: "Anomaly Detection Platform",
    description: "Built a real-time anomaly detection system for IoT sensor data using advanced statistical methods and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/Anis10-dev",
    technologies: ["Python", "Keras", "Apache Kafka", "Elasticsearch", "Grafana"]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in machine learning, data analysis, and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}