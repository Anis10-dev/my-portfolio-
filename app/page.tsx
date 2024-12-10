"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { VideoPlayer } from "@/components/video-player"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl font-bold">
              Hi, I&apos;m Anis Ismail Mohamud
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              Machine Learning Engineer & Data Analyst
            </h2>
            <p className="text-lg text-muted-foreground">
              Specializing in developing intelligent systems and extracting meaningful insights from complex datasets.
            </p>
            <div className="flex gap-4">
              <Button variant="default" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Anis10-dev/Anis10-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto">
              <Image
                src="https://utfs.io/f/xBBNn2ZfRjQT5ER0kX63ROFoztV82hLelHuSCxmvfBaZKgTb"
                alt="Anis Ismail"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
    

        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Watch My Introduction</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn about my journey in machine learning and data science, and discover how I can help transform your data into actionable insights.
            </p>
          </div>
          <VideoPlayer />
        </motion.section>
      </div>
    </div>
  )
}