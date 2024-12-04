"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/projects/project-card"

const projects = [
  {
    title: "AI-Powered Image Recognition System",
    description: "Developed a state-of-the-art computer vision system for real-time object detection and classification, achieving 98% accuracy on benchmark datasets.",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com",
    technologies: ["PyTorch", "OpenCV", "Python", "Docker", "AWS Lambda"]
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Built an interactive dashboard for sales forecasting using machine learning models, reducing forecast error by 35% compared to traditional methods.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com",
    technologies: ["Python", "Scikit-learn", "Streamlit", "PostgreSQL", "Plotly"]
  },
  {
    title: "Natural Language Processing Pipeline",
    description: "Created an end-to-end NLP pipeline for sentiment analysis and text classification, processing over 1M customer reviews with 92% accuracy.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com",
    technologies: ["BERT", "TensorFlow", "Python", "FastAPI", "MongoDB"]
  },
  {
    title: "Time Series Forecasting System",
    description: "Implemented an advanced time series forecasting system for stock market prediction using ensemble methods and deep learning.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com",
    technologies: ["LSTM", "Prophet", "Python", "Redis", "Docker"]
  },
  {
    title: "Recommendation Engine",
    description: "Developed a hybrid recommendation system combining collaborative and content-based filtering for e-commerce product suggestions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com",
    technologies: ["Python", "Apache Spark", "AWS", "Neo4j", "Flask"]
  },
  {
    title: "Anomaly Detection Platform",
    description: "Built a real-time anomaly detection system for IoT sensor data using advanced statistical methods and machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com",
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