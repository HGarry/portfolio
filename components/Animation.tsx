"use client";

import {  m, useReducedMotion ,Variants} from "framer-motion";
import React, { ReactNode } from "react";

// ==========================================
// 1. FadeIn (Hero, Section Headers, Text)
// ==========================================
interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.4,
  amount = 0.2,
  once = false, // Set to false to re-trigger on every scroll
  className = "",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion) {
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }

    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } };
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={getVariants()}
        transition={{ duration, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </m.div>
  );
}

// ==========================================
// 3. StaggerGrid & StaggerItem (Grids, Skills, Badges)
// ==========================================
interface StaggerGridProps {
  children: ReactNode;
  staggerDelay?: number;
  amount?: number;
  once?: boolean;
  className?: string;
}

export function StaggerGrid({
  children,
  staggerDelay = 0.08,
  amount = 0.2,
  once = false, // Set to false to re-trigger on every scroll
  className = "",
}: StaggerGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
      },
    },
  };

  return (
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={containerVariants}
        className={className}
      >
        {children}
      </m.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants:Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <m.div variants={itemVariants} className={className}>
      {children}
    </m.div>
  );
}

// ==========================================
// 4. PageTransition (App / Route Changes)
// ==========================================
export function PageTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    
      <m.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </m.div>
  );
}