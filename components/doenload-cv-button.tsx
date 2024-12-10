"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface DownloadCVButtonProps {
    variant?: "default" | "outline"
    size?: "default" | "sm" | "lg"
    showIcon?: boolean
}

export function DownloadCVButton({
                                     variant = "outline",
                                     size = "lg",
                                     showIcon = true
                                 }: DownloadCVButtonProps) {
    const handleDownload = () => {
        // Create a URL for the CV file
        const cvUrl = "/Mophat_cv.pdf"

        // Create a temporary link element
        const link = document.createElement("a")
        link.href = cvUrl
        link.download = "Mophat_cv.pdf"

        // Append to document, trigger click, and remove
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Button
                variant={variant}
                size={size}
                onClick={handleDownload}
            >
                {showIcon && <Download className="mr-2 h-4 w-4" />}
                Download CV
            </Button>
        </motion.div>
    )
}