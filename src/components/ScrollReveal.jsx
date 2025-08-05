"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ParallaxSection({ children, offset = 50 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export function CountUp({ end, duration = 2, suffix = "", prefix = "" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const count = useTransform(scrollYProgress, [0, 0.5], [0, end])
  
  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{Math.round(count.get())}</motion.span>
      {suffix}
    </motion.span>
  )
}