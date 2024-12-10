"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(1)
    const [showControls, setShowControls] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    let controlsTimeout: NodeJS.Timeout

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const updateProgress = () => {
            const progress = (video.currentTime / video.duration) * 100
            setProgress(progress)
        }

        video.addEventListener('timeupdate', updateProgress)
        return () => video.removeEventListener('timeupdate', updateProgress)
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const toggleFullscreen = () => {
        if (!containerRef.current) return

        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen()
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
        setIsFullscreen(!isFullscreen)
    }

    const handleVolumeChange = (value: number[]) => {
        const newVolume = value[0]
        if (videoRef.current) {
            videoRef.current.volume = newVolume
            setVolume(newVolume)
            setIsMuted(newVolume === 0)
        }
    }

    const handleMouseMove = () => {
        setShowControls(true)
        clearTimeout(controlsTimeout)
        controlsTimeout = setTimeout(() => {
            if (isPlaying) setShowControls(false)
        }, 2000)
    }

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-2xl bg-black"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
        >
            <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                poster="https://utfs.io/f/xBBNn2ZfRjQTRhErGExcrS2BgIiV0hylWPYoDv7ubktE65fd"
                onClick={togglePlay}
            >
                <source src="https://utfs.io/f/xBBNn2ZfRjQTUYYnwDvM9JyXtE3IeB52iHV7mRsrK8dkzZNh" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <AnimatePresence>
                {showControls && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    >
                        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
                            {/* Progress bar */}
                            <div className="w-full bg-white/20 rounded-full h-1 cursor-pointer">
                                <div
                                    className="bg-primary h-full rounded-full transition-all"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-white hover:bg-white/20"
                                        onClick={togglePlay}
                                    >
                                        {isPlaying ? (
                                            <Pause className="h-6 w-6" />
                                        ) : (
                                            <Play className="h-6 w-6" />
                                        )}
                                    </Button>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-white/20"
                                            onClick={toggleMute}
                                        >
                                            {isMuted ? (
                                                <VolumeX className="h-5 w-5" />
                                            ) : (
                                                <Volume2 className="h-5 w-5" />
                                            )}
                                        </Button>
                                        <div className="w-24">
                                            <Slider
                                                value={[isMuted ? 0 : volume]}
                                                min={0}
                                                max={1}
                                                step={0.1}
                                                onValueChange={handleVolumeChange}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/20"
                                    onClick={toggleFullscreen}
                                >
                                    {isFullscreen ? (
                                        <Minimize className="h-5 w-5" />
                                    ) : (
                                        <Maximize className="h-5 w-5" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Play/Pause overlay (shown only when paused) */}
            {!isPlaying && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white/90 hover:bg-white rounded-full w-16 h-16 p-0"
                            onClick={togglePlay}
                        >
                            <Play className="h-8 w-8" />
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    )
}