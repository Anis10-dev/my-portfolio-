"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl font-bold">
              Hi, I'm Anis Ismail Mohamud
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
                href="https://github.com"
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
            className="flex-1 relative"
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
      </div>
    </div>
  )
}